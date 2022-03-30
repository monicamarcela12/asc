import { Router } from '@angular/router';
import { LoginService } from './../services/login.service';
import {Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormBuilder, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = false;
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.loginForm = this.formBuilder.group({});
  }

  ngOnInit(): void {
   
  }

  submit(){
    /*if(this.loginForm.valid){
      this.spinner.show()

      this.loginService.login(this.loginForm.value).subscribe(response =>{
        this.spinner.hide()
        this.router.navigate(['/admin'])
      }, error=>{
        this.spinner.hide()
        this.toastr.error(`${error.error.error}`)
        this.loginForm.reset()
      })
    }else{
      this.toastr.error('Preencha os campos inválidos')
    }*/
    this.router.navigate(['/dashboard'])
  }

  get email(){
    return this.loginForm.get('email')
  }

  get password(){
    return this.loginForm.get('password')
  }
}
