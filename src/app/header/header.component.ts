import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean = true; // Assuming the user is logged in, change to false if the user is not logged in

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.toggleLoginStatus();
  }

  // Function to toggle visibility of elements based on user login status
  toggleLoginStatus(): void {
    var profileLink = document.getElementById('profile-link');
    var loginButton = document.getElementById('login-button');
    var signupButton = document.getElementById('signup-button');
    var logoutButton = document.getElementById('logout-button');

    if (profileLink && loginButton && signupButton && logoutButton) {
      if (this.isLoggedIn) {
        profileLink.style.display = 'block';
        loginButton.style.display = 'none';
        signupButton.style.display = 'none';
        logoutButton.style.display = 'block';
      } else {
        profileLink.style.display = 'none';
        loginButton.style.display = 'block';
        signupButton.style.display = 'block';
        logoutButton.style.display = 'none';
      }
    }
  }

  logout(): void {
    // Implement your logout logic here
    // For example, clear session storage, remove tokens, etc.
    // After logout, redirect the user to the login page
    this.router.navigate(['/login']);
  }

}
