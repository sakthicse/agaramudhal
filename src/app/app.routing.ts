import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';

export const rootRouterConfig: Routes = [
  { 
    path: '',
    redirectTo: 'resources/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'resources',
        loadChildren: () => import('./views/agaramudhal/agaramudhal.module').then(m => m.AgaramudhalModule),
      }
    ]
  },
  {
    path: 'sessions',
    loadChildren: () => import('./views/sessions/sessions.module').then(m => m.SessionsModule),
    data: { title: 'Session'}
  },
  {
    path: '**',
    redirectTo: 'sessions/404'
  }
];

