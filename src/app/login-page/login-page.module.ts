import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatTabsModule,
    MatButtonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        LoginPageComponent
    ],
    declarations: [LoginPageComponent]
})
export class LoginPageModule {}
