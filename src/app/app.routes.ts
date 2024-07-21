import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: "", redirectTo: "auth/signup", pathMatch: "full" },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
];
