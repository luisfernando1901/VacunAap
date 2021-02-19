import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmacion-aceptada',
  templateUrl: './confirmacion-aceptada.page.html',
  styleUrls: ['./confirmacion-aceptada.page.scss'],
})
export class ConfirmacionAceptadaPage implements OnInit {
  img_src = '../../assets/img/map.png';
  constructor() {
    localStorage.setItem('vacunado','si');
  }

  ngOnInit() {
  }

}
