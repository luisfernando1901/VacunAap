import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsperaConfirmacionPage } from './espera-confirmacion.page';

const routes: Routes = [
  {
    path: '',
    component: EsperaConfirmacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsperaConfirmacionPageRoutingModule {}
