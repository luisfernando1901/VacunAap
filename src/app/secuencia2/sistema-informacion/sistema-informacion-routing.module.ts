import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SistemaInformacionPage } from './sistema-informacion.page';

const routes: Routes = [
  {
    path: '',
    component: SistemaInformacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SistemaInformacionPageRoutingModule {}
