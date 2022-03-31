import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {patterns} from '../../shared/helpers/patterns.helper';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  hide = true;
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
    this.loginForm = this.formBuilder.group({
      nome: [null],
      email: [null],
      telefone: [null],
      senha: [null]
    });
  }

  submit(){
    if(this.loginForm.valid){
      this.spinner.show()
      this.loginService.registro(this.loginForm.value).subscribe(response => {
        this.spinner.hide();
        this.router.navigate(['../login']);
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
