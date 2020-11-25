import { environment } from './../../../environments/environment';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from './../../_service/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  hide = true;

  constructor(private loginService: LoginService,
              private snackBar: MatSnackBar,
              private router: Router) { }

  ngOnInit(): void {
    this.iniciarFormulario();
  }

  login(){
    /* this.loginService.login(this.form.value['usuario'], this.form.value['contrasenia']).subscribe(data => {
      sessionStorage.setItem(environment.TOKEN_NAME, data.access_token);
      this.router.navigate(['']);
    }); */
  }

  openSnackBar(message: string){
    this.snackBar.open(message, 'Informacion', {
      duration: 3000,
    });
  }

  iniciarFormulario(){
    this.form = new FormGroup({
     'usuario': new FormControl('', [Validators.required]),
     'contrasenia': new FormControl('', [Validators.required])
    });
  }

  get usuario() {
    return this.form.get('usuario');
  }

  get contrasenia() {
    return this.form.get('contrasenia');
  }
}
