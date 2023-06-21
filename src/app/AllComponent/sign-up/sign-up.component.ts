import { Component } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, sendEmailVerification } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  showPass = false;

  constructor(public auth:Auth, private router:Router) {}

  email:string;
  password1:string;
  password2:string;

  getEmail(val:string)
  {
    this.email = val;
  }

  getPass1(val:string)
  {
    this.password1 = val;
  }

  getPass2(val:string)
  {
    this.password2 = val;
  }

  submitDetails()
  {
    if (this.password2 == this.password1)
    {
      createUserWithEmailAndPassword(this.auth, this.email, this.password1)
      .then((userCredential) => {
        console.log("Logged in");
        this.router.navigate(["/LogIn"]);
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorMessage == "Firebase: Error (auth/email-already-in-use).")
        {
          alert("Email already in use!");
        }
        else if (errorMessage == "Firebase: Error (auth/invalid-email).")
        {
          alert("Invalid Email!");
        }
        else if(errorMessage == "Firebase: Password should be at least 6 characters (auth/weak-password).")
        {
          alert("Password should be at least 6 characters.");
        }
        else
        {
          alert(errorMessage);
        }
      });
    }
    else if(this.password1 != this.password2)
    {
      alert("Both passwords are not same!");
    }
  }

  showPassword()
  {
    this.showPass = !this.showPass;
  }
}
