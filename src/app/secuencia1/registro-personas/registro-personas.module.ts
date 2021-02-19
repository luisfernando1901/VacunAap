import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { RegistroPersonasPageRoutingModule } from './registro-personas-routing.module';

import { RegistroPersonasPage } from './registro-personas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroPersonasPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [RegistroPersonasPage]
})
export class RegistroPersonasPageModule {}
