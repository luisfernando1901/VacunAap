import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignosSintomasPage } from './signos-sintomas.page';

const routes: Routes = [
  {
    path: '',
    component: SignosSintomasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignosSintomasPageRoutingModule {}
