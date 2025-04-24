import { Component, OnInit } from '@angular/core';
import { IUser } from "../interfaces/user";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../services/authentication/auth.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
  standalone: false,
})
export class RegistrationPage implements OnInit {
  user: IUser = {
    username: '',
    password: '',
    role: 'user'
  }

  showPassword = false;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.errorMessage = params['error'] || null;
    })
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  registration() {
    if (this.user.username != "" && this.user.password != "") {
      return this.authService.register(this.user);
    }
    return;
  }

}
