import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/house-principal/house-principal.module').then(
        (m) => m.HousePrincipalPageModule
      ),
  },
  {
    path: 'detail',
    loadChildren: () =>
      import('./pages/house-detail/house-detail.module').then(
        (m) => m.HouseDetailPageModule
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
