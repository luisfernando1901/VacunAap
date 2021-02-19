import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recomendaciones',
  templateUrl: './recomendaciones.page.html',
  styleUrls: ['./recomendaciones.page.scss'],
})
export class RecomendacionesPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  img_src1 = '../../assets/img/infoVacuna.png';
  img_src2 = '../../assets/img/efectos.png';
  img_src3 = '../../assets/img/recomendacion.png';
  constructor() { }

  ngOnInit() {
  }

}
