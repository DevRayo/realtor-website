import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousePrincipalRoutingModule } from './house-principal-routing.module';
import { HousePrincipalComponent } from './house-principal.component';

@NgModule({
  imports: [CommonModule, HousePrincipalRoutingModule],
  declarations: [HousePrincipalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HousePrincipalPageModule {}

