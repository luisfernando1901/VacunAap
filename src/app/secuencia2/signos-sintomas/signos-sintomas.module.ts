import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignosSintomasPageRoutingModule } from './signos-sintomas-routing.module';

import { SignosSintomasPage } from './signos-sintomas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignosSintomasPageRoutingModule
  ],
  declarations: [SignosSintomasPage]
})
export class SignosSintomasPageModule {}
