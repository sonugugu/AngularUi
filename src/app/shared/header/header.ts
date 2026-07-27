import { Component } from '@angular/core';
import { Router,RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
   categoryExpanded = false;

constructor(private router: Router) {}

  toggleCategory() {
    this.categoryExpanded = !this.categoryExpanded;
  }


  logout() {

    localStorage.removeItem('isLoggedIn');

    this.router.navigate(['/login']);

  }
}