import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionLocalPage } from './seleccion-local.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionLocalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionLocalPageRoutingModule {}
