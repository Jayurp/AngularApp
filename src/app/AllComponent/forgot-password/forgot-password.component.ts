import { Component } from '@angular/core';
import { Auth,sendPasswordResetEmail } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  
  constructor(public auth:Auth, private router: Router,) {}

  email:string;

  getEmail(val:string)
  {
    this.email = val;
    console.log(this.email);
  }

  reset()
  {
    sendPasswordResetEmail(this.auth, this.email)
      .then(() => {
        console.log("Success");
        alert("Password reset link has been sent on your email.");
        this.router.navigate(["/LogIn"]);
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
  });
  }
}