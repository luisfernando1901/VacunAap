import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { SeleccionUsuarioPageRoutingModule } from './seleccion-usuario-routing.module';

import { SeleccionUsuarioPage } from './seleccion-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionUsuarioPageRoutingModule,
    RouterModule,
  ],
  declarations: [SeleccionUsuarioPage]
})
export class SeleccionUsuarioPageModule {}
