import { CanActivateFn, Router } from '@angular/router';
import { inject } from "@angular/core";
import { AuthService } from "../services/authentication/auth.service";

export const guestGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const user = authService.user();

  // Kalo udh login
  if (user) {
    // Check role-nya
    switch (user.role) {
      case "admin":
        return router.navigate(['/admin/movie']);
      default:
        return router.navigate(['/home']);
    }
  }

  // Kalo belum
  return true;
};
