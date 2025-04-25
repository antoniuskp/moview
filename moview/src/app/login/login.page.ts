import { Component, OnInit } from '@angular/core';
import { IUser } from "../interfaces/user";
import { AuthService } from '../services/authentication/auth.service';
import {ActivatedRoute, Router} from "@angular/router";
import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
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
export class LoginPage implements OnInit {
  user: IUser = {
    username: '',
    password: '',
    role: 'user'
  }

  errorMessage: string | null = null;

  showPassword = false;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.errorMessage = params['error'] || null;

      setTimeout(() => {
        this.errorMessage = null;
      }, 3000);

      // setTimeout(() => {
      //   this.errorMessage = null;
      //
      //   this.router.navigate([], {
      //     relativeTo: this.route,
      //     queryParams: {},
      //     replaceUrl: true,
      //   });
      // }, 3000);
    })
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  doLogin() {
    if (this.user.username != "" && this.user.password != "") {
      return this.authService.login(this.user);
    }

    return;
  }

}
