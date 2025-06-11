import { Injectable } from '@angular/core';
import { IUser } from "../../interfaces/user";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, switchMap, throwError } from 'rxjs';

// let users: IUser[] = [
//   {
//     username: "admin",
//     password: "admin",
//     role: "admin",
//     photo: "https://static.vecteezy.com/system/resources/previews/043/900/708/non_2x/user-profile-icon-illustration-vector.jpg"
//   },
//   {
//     username: "nathan",
//     password: "password",
//     role: "user",
//     photo: "https://media.creativemornings.com/uploads/user/avatar/49419/Bechtel_Profile_Square.jpg"
//   },
//   {
//     username: "anton",
//     password: "password",
//     role: "user",
//     photo: "https://www.themarketingnutz.com/wp-content/uploads/2018/01/opulent-profile-square-07.jpg"
//   },
//   {
//     username: "deby",
//     password: "password",
//     role: "user",
//     photo: "https://elireview.com/wp-content/uploads/2016/12/reed-profile-square.jpg"
//   },
//   {
//     username: "budi",
//     password: "password",
//     role: "user",
//     photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSrdB8rRgA1qgkw0ckcTrhIa0kpV2ILvbMWg&s"
//   },
//   {
//     username: "agus",
//     password: "password",
//     role: "user",
//     photo: "https://pbs.twimg.com/profile_images/1742085398606888960/si-Cz_UA_400x400.jpg"
//   },
// ]


const USER = "user";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient) { }

  // user(): IUser | null {
  //   // Get JSON from local storage
  //   const userJSON = localStorage.getItem(USER);

  //   if (!userJSON) return null;

  //   const user: IUser = JSON.parse(userJSON);

  //   return user;
  // }
  user(): IUser | null {
    const userJSON = localStorage.getItem(USER);
    if (!userJSON) return null;
    return JSON.parse(userJSON);
  }

  // users(): Observable<any> {
  //   return this.http.get("https://ubaya.xyz/hybrid/160422065/moview/user.php");
  // }

  // register(user: IUser) {
  //   const checkUser = users.find((_user) => _user.username === user.username);

  //   // Kalo username udh ada
  //   if (checkUser) {
  //     this.router.navigate(['/registration'], {
  //       queryParams: { error: "Username already exists"},
  //       replaceUrl: true  // Buat hapus stack sebelumnya
  //     });
  //     return;
  //   }

  //   // Tambahkan User
  //   users.push(user);

  //   localStorage.setItem(USER, JSON.stringify(user));

  //   // Redirect ke home
  //   this.router.navigate(['/home'], {
  //     replaceUrl: true
  //   });
  // }

  // register(user: IUser) {
  //   //checkUser
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
  //   const body = new URLSearchParams();
  //   body.set('usernameuser', user.username);
  //   const urlEncodedData = body.toString();

  //   this.http.post<any[]>("https://ubaya.xyz/hybrid/160422065/moview/checkuser.php", urlEncodedData, { headers })
  //     .subscribe(response => {
  //       if (response.length > 0) {
  //         // Username sudah ada
  //         this.router.navigate(['/registration'], {
  //           queryParams: { error: "Username already exists" },
  //           replaceUrl: true
  //         });
  //         return;
  //       } else {
  //         const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
  //         const body = new URLSearchParams();
  //         body.set('usernameuser', user.username);
  //         body.set('passworduser', user.password);
  //         body.set('role', user.role);
  //         if (user.photo) {
  //           body.set('photo', user.photo);
  //         } else {
  //           body.set('photo', '');
  //         }
  //         const urlEncodedData = body.toString();
  //         return this.http.post("https://ubaya.xyz/hybrid/160422065/moview/register.php", urlEncodedData, { headers });

  //         // return this.router.navigate(['/home'], {
  //         //   replaceUrl: true
  //         // });
  //       }
  //     }, error => {
  //       console.error('Error saat cek user:', error);
  //     });
  // }

  register(user: IUser) {
    //checkUser
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const checkBody = new URLSearchParams();
    checkBody.set('usernameuser', user.username);

    return this.http.post<any[]>("https://ubaya.xyz/hybrid/160422065/moview/checkuser.php", checkBody.toString(), { headers }).pipe(
      switchMap(response => {
        if (response.length > 0) {
          this.router.navigate(['/registration'], {
            queryParams: { error: "Username already exists" },
            replaceUrl: true
          });
          return throwError(() => new Error("Username already exists"));
        }

        const regBody = new URLSearchParams();
        regBody.set('usernameuser', user.username);
        regBody.set('passworduser', user.password);
        regBody.set('role', user.role);
        regBody.set('photo', user.photo ?? '');

        return this.http.post("https://ubaya.xyz/hybrid/160422065/moview/register.php", regBody.toString(), { headers });
      })
    );
  }

  // login(user: IUser) {
  //   const checkUser = users.find((_user) => _user.username === user.username);

  //   // Kali user tidak ada
  //   if (!checkUser) {
  //     // Redirect ke login page dan kirim pesan
  //     console.log("Redirecting to /login because user was not found");
  //     try {
  //       this.router.navigate(['/login'], {
  //         queryParams: { error: "User not found" },
  //         replaceUrl: true,
  //       });
  //     } catch (e) {
  //       console.log(e);
  //     }
  //     return;
  //   }

  //   const userJSON = JSON.stringify(checkUser);
  //   localStorage.setItem(USER, userJSON);

  //   // Kalo ada, check role-nya
  //   switch (checkUser.role) {
  //     case "admin":
  //       return this.router.navigate(['/admin/movie'], {
  //         replaceUrl: true
  //       });
  //     default:
  //       return this.router.navigate(['/home'], {
  //         replaceUrl: true
  //       });
  //   }
  // }

  login(user: IUser) {
    //check username and password
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('usernameuser', user.username);
    body.set('passworduser', user.password);
    const urlEncodedData = body.toString();

    this.http.post<any[]>("https://ubaya.xyz/hybrid/160422065/moview/login.php", urlEncodedData, { headers })
      .subscribe(response => {
        if (response.length > 0) {
          //ada data
          const loggedInUser: IUser = response[0];
          localStorage.setItem(USER, JSON.stringify(loggedInUser));
          //check role
          if (loggedInUser.role === 'admin') {
            return this.router.navigate(['/admin/movie'], {
              replaceUrl: true
            });
          } else {
            return this.router.navigate(['/home'], {
              replaceUrl: true
            });
          }
        } else {
          //tidak ada data
          this.router.navigate(['/login'], {
            queryParams: { error: "Username or password wrong not found" },
            replaceUrl: true,
          });
          return;
        }
      }, error => {
        console.error('Error saat cek user:', error);
      });

  }

  logout() {
    localStorage.removeItem(USER);
    this.router.navigate(['/home'], {
      replaceUrl: true
    })
  }
}
