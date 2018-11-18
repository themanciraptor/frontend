import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

    loginForm: FormGroup;
    RegistrationForm: FormGroup;

    constructor(private authService: AuthService, private formBuilder: FormBuilder) {

    }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            'email': ['', Validators.required],
            'password': ['', Validators.required]
        });
    }

    loginClicked(): void {
        // do the login
        console.log('Login clicked');
        if (this.loginForm.valid) {
            this.authService.login(this.loginForm.value);
        }

    }

    registerClicked(): void {
        // do the registration
        console.log('Register clicked');
    }

}
