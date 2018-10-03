import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    LoginPageComponent
  ],
  declarations: [LoginPageComponent]
})
export class LoginPageModule { }
