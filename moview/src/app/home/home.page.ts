import { Component } from '@angular/core';
import { AuthService } from "../services/authentication/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(private authService: AuthService, private router: Router) { }

  isAuthenticated() {
    return this.authService.user() != null;
  }

  goLoginPage() {
    return this.router.navigate(['login']);
  }
}
