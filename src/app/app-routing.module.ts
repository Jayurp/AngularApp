import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './AllComponent/sign-up/sign-up.component';
import { LogInComponent } from './AllComponent/log-in/log-in.component';
import { LandingPageComponent } from './AllComponent/landing-page/landing-page.component';
import { ForgotPasswordComponent } from './AllComponent/forgot-password/forgot-password.component';

const routes: Routes = [

  {path: "SignUp", component: SignUpComponent},
  {path: "LogIn", component: LogInComponent},
  {path: "", component: LogInComponent},
  {path: "Home", component: LandingPageComponent},
  {path: "ForgotPassword", component: ForgotPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
