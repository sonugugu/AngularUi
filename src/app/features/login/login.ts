import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  username: string = '';
  password: string = '';

  errorMessage: string = '';

  constructor(private router: Router) {}

  login() {

    if (this.username === 'sonu' && this.password === 'sonu0303') {

      this.errorMessage = '';

      // Save login status
      localStorage.setItem('isLoggedIn', 'true');

      // Login successful
      this.router.navigate(['/dashboard']);

    } else {

      // Login failed
      this.errorMessage = 'Invalid username or password';

    }
  }
}