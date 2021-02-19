import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmacionAceptadaPage } from './confirmacion-aceptada.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmacionAceptadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmacionAceptadaPageRoutingModule {}
