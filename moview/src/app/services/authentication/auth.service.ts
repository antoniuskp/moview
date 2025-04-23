import { Injectable } from '@angular/core';
import { IUser } from "../../interfaces/user";
import {Router} from "@angular/router";

let users: IUser[] = [
  {
    username: "admin",
    password: "admin",
    role: "admin",
    photo: "https://static.vecteezy.com/system/resources/previews/043/900/708/non_2x/user-profile-icon-illustration-vector.jpg"
  },
  {
    username: "nathan",
    password: "password",
    role: "user",
    photo: "https://media.creativemornings.com/uploads/user/avatar/49419/Bechtel_Profile_Square.jpg"
  },
  {
    username: "anton",
    password: "password",
    role: "user",
    photo: "https://www.themarketingnutz.com/wp-content/uploads/2018/01/opulent-profile-square-07.jpg"
  },
  {
    username: "deby",
    password: "password",
    role: "user",
    photo: "https://elireview.com/wp-content/uploads/2016/12/reed-profile-square.jpg"
  },
  {
    username: "budi",
    password: "password",
    role: "user",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSrdB8rRgA1qgkw0ckcTrhIa0kpV2ILvbMWg&s"
  },
  {
    username: "agus",
    password: "password",
    role: "user",
    photo: "https://pbs.twimg.com/profile_images/1742085398606888960/si-Cz_UA_400x400.jpg"
  },
]


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {  }

  user(): IUser | null {
    // Get JSON from local storage
    const userJSON = localStorage.getItem("user");

    if (!userJSON) return null;

    const user: IUser = JSON.parse(userJSON);

    return user;
  }

  register(user: IUser) {
    const checkUser = users.find((_user) => _user.username === user.username);

    // Kalo username udh ada
    if (checkUser) {
      this.router.navigate(['/register'], {
        queryParams: { error: "Username already exists"},
        replaceUrl: true  // Buat hapus stack sebelumnya
      });
      return;
    }

    // Tambahkan User
    users.push(user);

    // Redirect ke home
    this.router.navigate(['/home'], {
      replaceUrl: true
    });
  }

  login(user: IUser) {
    const checkUser = users.find((_user) => _user.username === user.username);

    // Kali user tidak ada
    if (!checkUser) {
      // Redirect ke login page dan kirim pesan
      this.router.navigate(['/login'], {
        queryParams: { error: "User not found"},
        replaceUrl: true  // Buat hapus stack sebelumnya
      });
      return;
    }

    // Kalo ada, check role-nya
    switch (user.role) {
      case "admin":
        this.router.navigate(['/admin/movie'], {
          replaceUrl: true
        });
        return;
      default:
        this.router.navigate(['/home'], {
          replaceUrl: true
        });
        return;
    }
  }

}
