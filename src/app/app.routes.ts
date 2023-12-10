import { Routes } from '@angular/router';

export const routes: Routes = [
  {
      path: '',
      loadChildren: () => import('../screens/un-auth/un-auth.module').then((m) => m.UnauthModule),
    },
  {
    path: 'auth',
    loadChildren: () => import('../screens/auth/auth.module').then((m) => m.AuthModule),
  },
 
];
