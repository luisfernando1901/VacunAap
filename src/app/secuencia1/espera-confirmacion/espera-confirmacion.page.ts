import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-espera-confirmacion',
  templateUrl: './espera-confirmacion.page.html',
  styleUrls: ['./espera-confirmacion.page.scss'],
})
export class EsperaConfirmacionPage implements OnInit {
  img_src = '../../assets/img/waiting.jpeg';
  constructor() { }

  ngOnInit() {

  }

  aceptada(){
    localStorage.setItem('confirmacion','aceptada');
  }

}
