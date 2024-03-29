import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { map, switchMap, take } from 'rxjs/operators';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { LoginResponse } from './LoginResponse';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { RegisterResponse } from '../services/RegisterResponse';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  COOKIE_SESSION_ID = 'sessionId';
  COOKIE_USER_ID = 'userId';

  loginForm: FormGroup;
  registerForm: FormGroup;

  loginError: string;

  loading$$: BehaviorSubject<boolean>;

  constructor(
    public snackBar: MatSnackBar,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private cookieService: CookieService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.checkLoggedIn();

    timer(500).pipe(
      switchMap(() => this.activatedRoute.queryParams),
      map(params => params['registered'])
    ).subscribe(showRegistrationSnackbar => {
      if (showRegistrationSnackbar) {
        this.snackBar.open('Registration successful!', null, {duration: 3000});
      }
    });

    this.loading$$ = new BehaviorSubject(false);

    this.loginForm = this.formBuilder.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });

    this.registerForm = this.formBuilder.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'address': ['', Validators.required],
      'email': ['', Validators.required],
      'password': ['', Validators.required],
      'confirmPassword': ['', Validators.required]
    });
  }

  private checkLoggedIn() {
    const userId = this.cookieService.get(this.COOKIE_USER_ID);
    if (userId) {
      this.router.navigate([`/profile/${userId}`]);
    }
  }

  loginClicked(): void {
    if (this.loginForm.valid) {
      this.loading$$.next(true);
      this.authService.login(this.loginForm.value).pipe(take(1))
        .subscribe((response: LoginResponse) => {
          if (response.success) {
            this.cookieService.set(this.COOKIE_SESSION_ID, response.sessionId);
            this.cookieService.set(this.COOKIE_USER_ID, response.userId);
            this.router.navigate([`/profile/${response.userId}`]);
          } else {
            this.loginError = 'Error logging in';
            this.loading$$.next(false);
            return;
          }
        });
    }

  }

  registerClicked(): void {
    // do the registration
    console.log('Register clicked');
    if (this.registerForm.valid) {
      if (this.registerForm.value.password === this.registerForm.value.confirmPassword) {
        this.authService.register(this.registerForm.value).pipe(take(1))
          .subscribe((response: RegisterResponse) => {
            if (response.success) {
              window.location.replace('/login?registered=true');
            }
          });
      } else {
        this.registerForm.get('password').setErrors({matching: {password: 'Password did not match'}});
        this.registerForm.get('confirmPassword').setErrors({matching: {confirmPassword: 'Password did not match'}});
      }
    }
  }
}
