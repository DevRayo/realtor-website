import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HousePrincipalComponent } from './house-principal.component';

const routes: Routes = [
  {
    path: '',
    component: HousePrincipalComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HousePrincipalRoutingModule {}
