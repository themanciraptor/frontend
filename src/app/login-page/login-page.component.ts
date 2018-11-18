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
    registerForm: FormGroup;

    constructor(private authService: AuthService, private formBuilder: FormBuilder) {

    }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            'email': ['', Validators.required],
            'password': ['', Validators.required]
        });


        this.registerForm = this.formBuilder.group({
            'email': ['', Validators.required],
            'password': ['', Validators.required],
            'confirmPassword': ['', Validators.required]
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
        if (this.registerForm.valid) {
            if (this.registerForm.value.password === this.registerForm.value.confirmPassword) {
                this.authService.register(this.registerForm.value);
            } else {
                this.registerForm.get('password').setErrors({matching: {password: 'Password did not match'}});
                this.registerForm.get('confirmPassword').setErrors({matching: {confirmPassword: 'Password did not match'}});
            }
        }
    }
}
