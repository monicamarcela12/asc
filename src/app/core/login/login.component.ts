import { Router } from '@angular/router';
import { LoginService } from './../services/login.service';
import {Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { patterns } from 'src/app/shared/helpers/patterns.helper';
import { FacebookService, LoginResponse, UIParams, UIResponse } from 'ngx-facebook';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  hide = true;
  loginForm: FormGroup;
  value
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private spinner: NgxSpinnerService,
    private facebook: FacebookService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.loginForm = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['adm@wipstore.com', Validators.compose([Validators.required, Validators.pattern(patterns.email)])],
      senha: ["w909121@#71adm", [Validators.required]],
    });
  }

  loginWithFacebook(): void {
    this.facebook.login()
      .then((response: LoginResponse) => console.log(response))
      .catch((error: any) => console.error(error));
  }

  share(url: string) {
 
    const params: UIParams = {
      href: 'https://github.com/zyra/ngx-facebook',
      method: 'share'
    };
   
    this.facebook.ui(params)
      .then((res: UIResponse) => console.log(res))
      .catch((e: any) => console.error(e));
   
  }

  submit(){
    if(this.loginForm.valid){
      this.spinner.show()
      this.loginService.login(this.loginForm.value).subscribe(response => {
        this.spinner.hide();
        this.router.navigate(['/patient-list']);
      }, error=>{
        this.spinner.hide();
        this.toastr.error(`${error.msg}`)
        this.loginForm.reset()
      })
    }else{
      this.toastr.error('Preencha os campos inválidos')
    }
  }

  get email(){
    return this.loginForm.get('email')
  }

  get password(){
    return this.loginForm.get('password')
  }
}
