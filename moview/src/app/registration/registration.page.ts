import { Component, OnInit } from '@angular/core';
import { IUser } from "../interfaces/user";
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "../services/authentication/auth.service";
import { animate, style, transition, trigger } from "@angular/animations";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
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
export class RegistrationPage implements OnInit {
  user: IUser = {
    username: '',
    password: '',
    photo: '',
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

      setTimeout(() => {
        this.errorMessage = null;
      }, 3000);
    })
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  registration() {
    if (this.user.username != "" && this.user.password != "") {
      console.log("MASUK REGIST")
      return this.authService.register(this.user);
    }
    return;
  }

}
