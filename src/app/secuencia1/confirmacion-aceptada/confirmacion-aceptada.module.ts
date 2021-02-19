import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmacionAceptadaPageRoutingModule } from './confirmacion-aceptada-routing.module';

import { ConfirmacionAceptadaPage } from './confirmacion-aceptada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmacionAceptadaPageRoutingModule
  ],
  declarations: [ConfirmacionAceptadaPage]
})
export class ConfirmacionAceptadaPageModule {}
