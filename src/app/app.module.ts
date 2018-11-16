import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginPageModule } from './login-page/login-page.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DialogApply, StudentProfileComponent } from './student-profile/student-profile.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule, MatFormFieldModule,
  MatIconModule,
  MatListModule,
  MatProgressSpinnerModule, MatSelectModule,
  MatTableModule
} from '@angular/material';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentProfileComponent,
    PageNotFoundComponent,
    DialogApply
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LoginPageModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    AppRoutingModule
  ],
  entryComponents: [DialogApply],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
