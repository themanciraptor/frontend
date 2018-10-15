import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loginClicked(): void {
    // do the login
    console.log('Login clicked');
  }

  registerClicked(): void {
    // do the registration
    console.log('Register clicked');
  }

}
