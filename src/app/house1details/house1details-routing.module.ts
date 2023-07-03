import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { House1detailsPage } from './house1details.page';

const routes: Routes = [
  {
    path: '',
    component: House1detailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class House1detailsPageRoutingModule {}
