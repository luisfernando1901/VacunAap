import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SistemaInformacionPageRoutingModule } from './sistema-informacion-routing.module';

import { SistemaInformacionPage } from './sistema-informacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SistemaInformacionPageRoutingModule
  ],
  declarations: [SistemaInformacionPage]
})
export class SistemaInformacionPageModule {}
