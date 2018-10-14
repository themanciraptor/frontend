import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {StudentHomepageComponent} from './homepages/student/student-homepage/student-homepage.component';
import {LandingPageComponent} from './landing-page/landing-page.component';


const routes: Routes = [

    { path: '', component: LandingPageComponent, pathMatch: 'full' },
    { path: 'login', component: LoginPageComponent },
    { path: 'index', component: StudentHomepageComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}