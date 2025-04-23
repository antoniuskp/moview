import { Component, OnInit } from '@angular/core';
import { IUser } from "../interfaces/user";
import { AuthService } from '../services/authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {
  user: IUser = {
    username: '',
    password: '',
    role: 'user'
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  doLogin() {

  }

}
