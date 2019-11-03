import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';

export const rootRouterConfig: Routes = [
  { 
    path: '',
    redirectTo: 'resources',
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
    path: '**',
    redirectTo: 'sessions/404'
  }
];

