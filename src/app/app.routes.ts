import { Routes } from '@angular/router';

import { NotFound } from './error-routing/not-found/not-found';
import { UncaughtError } from './error-routing/error/uncaught-error';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'error', component: UncaughtError },
  { path: 'home', loadChildren: () => import('./home/home.routes').then(m => m.routes), data: { text: 'Home' } },
  { path: 'in-app', loadChildren: () => import('./in-app/in-app.routes').then(m => m.routes), data: { text: 'In-App' } },
  { path: '**', component: NotFound } // must always be last
];
