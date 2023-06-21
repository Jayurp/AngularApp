import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, getAuth, signInWithEmailAndPassword, onAuthStateChanged, sendEmailVerification } from '@angular/fire/auth';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  showPass = false;

  constructor(public auth:Auth, private router: Router,) {

    const newAuth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user != null && user.emailVerified == true) {
        console.log(user);
        this.router.navigate(["/Home"]);
        const uid = user.uid;
      } 
      else if(user != null && user.emailVerified == false)
      {
        sendEmailVerification(user)
        .then(() => {
          // Email verification sent!
          // ...
        });
        alert("Please verify "+user.email+" or log in again.");
      }
      else {
        console.log(user);
      }
    });
  }

  email:string;
  password:string;

  getEmail(val:string)
  {
    this.email = val;
  }

  getPass(val:string)
  {
    this.password = val;
  }

  gotoSignUp()
  {
    this.router.navigateByUrl('/SignUp');
  }

  logHere()
  {
    signInWithEmailAndPassword(this.auth, this.email, this.password)
    .then((userCredential) => {
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if(errorMessage == "Firebase: Error (auth/user-not-found).")
      {
        alert("Email not found!");
      }
      else if(errorMessage == "Firebase: Error (auth/wrong-password).")
      {
        alert("Wrong Password!`");
      }
      else
      {
        alert(errorMessage);
      }
    });
  }

  showPassword()
  {
    this.showPass = !this.showPass;
  }
}