import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { SeleccionLocalPageRoutingModule } from './seleccion-local-routing.module';

import { SeleccionLocalPage } from './seleccion-local.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionLocalPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [SeleccionLocalPage]
})
export class SeleccionLocalPageModule {}
