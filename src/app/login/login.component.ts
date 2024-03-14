import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  loading = false;
  error = '';

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    setTimeout(() => {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;

      // Replace this with your actual authentication logic
      const users = [
        { username: 'finance-admin', password: 'admin@123', userType: 'admin' },
        { username: 'exam-admin', password: 'admin@123', userType: 'admin' },
        { username: 'user', password: 'user@123', userType: 'user' }
      ];

      const user = users.find(u => u.username === username && u.password === password);

      if (user) {
        this.error = '';
        console.log('Login successful!');

        // Save user details in local storage
        localStorage.setItem('currentUser', JSON.stringify(user));

        // Redirect based on user type
        if (user.userType === 'admin') {
          this.router.navigate(['/admin-dashboard']);
        } else {
          this.router.navigate(['/home']);
        }
      } else {
        this.error = 'Invalid username or password';
        console.log('Login failed!');
      }

      this.loading = false;
    }, 2000);
  }
}
