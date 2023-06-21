import { Component } from '@angular/core';
import { Auth, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  constructor(public auth:Auth, public router:Router,) {}

  logOut()
  {
    signOut(this.auth).then(() => {
      console.log("Success");
      this.router.navigate(["/LogIn"]);
    }).catch((error) => {
      alert("Log Out failed!");
    });
  }
}