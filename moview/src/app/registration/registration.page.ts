import { Component, OnInit } from '@angular/core';
import { IUser } from "../interfaces/user";
import {ActivatedRoute} from "@angular/router";

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
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe(params => {
      this.errorMessage = params['error'] || null;
    })
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

}
