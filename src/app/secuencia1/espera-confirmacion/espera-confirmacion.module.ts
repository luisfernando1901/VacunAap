import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsperaConfirmacionPageRoutingModule } from './espera-confirmacion-routing.module';

import { EsperaConfirmacionPage } from './espera-confirmacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsperaConfirmacionPageRoutingModule
  ],
  declarations: [EsperaConfirmacionPage]
})
export class EsperaConfirmacionPageModule {}
