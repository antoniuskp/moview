import { CanActivateFn, Router } from '@angular/router';
import { inject } from "@angular/core";
import { AuthService } from "../services/authentication/auth.service";

export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const expectedRole = route.data?.["expectedRole"];

  const user = authService.user();

  // Kalo belum login
  if (!user) {
    return router.navigate(['/login'], {
      replaceUrl: true
    });
  }

  // Check role
  if (user.role === expectedRole) {
    return true
  }
  else {
    return router.navigate(['/home'], {
      replaceUrl: true
    });
  }
};
