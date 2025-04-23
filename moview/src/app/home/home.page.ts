import { Component } from '@angular/core';
import { AuthService } from "../services/authentication/auth.service";
import { Router } from "@angular/router";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class HomePage {

  constructor(private authService: AuthService, private router: Router) { }

  showLogout = false;

  logout() {
     this.authService.logout();
  }

  toggleLogout() {
    this.showLogout = !this.showLogout;
  }

  isAuthenticated() {
    return this.authService.user() != null;
  }

  getUser() {
    return this.authService.user();
  }

  goLoginPage() {
    return this.router.navigate(['login']);
  }
}
