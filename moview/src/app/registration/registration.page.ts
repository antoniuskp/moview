import { Component, OnInit } from '@angular/core';
import { IUser } from "../interfaces/user";

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

  constructor() { }

  ngOnInit() {
  }

}
