import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { House1detailsPageRoutingModule } from './house1details-routing.module';

import { House1detailsPage } from './house1details.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    House1detailsPageRoutingModule
  ],
  declarations: [House1detailsPage]
})
export class House1detailsPageModule {}
