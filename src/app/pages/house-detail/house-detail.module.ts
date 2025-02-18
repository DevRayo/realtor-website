import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseDetailRoutingModule } from './house-detail-routing.module';
import { HouseDetailComponent } from './house-detail.component';

@NgModule({
  imports: [CommonModule, HouseDetailRoutingModule],
  declarations: [HouseDetailComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HouseDetailPageModule {}
