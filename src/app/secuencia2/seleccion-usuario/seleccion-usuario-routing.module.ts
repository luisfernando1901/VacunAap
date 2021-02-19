import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionUsuarioPage } from './seleccion-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionUsuarioPageRoutingModule {}
