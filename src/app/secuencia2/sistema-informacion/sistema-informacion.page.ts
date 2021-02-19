import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sistema-informacion',
  templateUrl: './sistema-informacion.page.html',
  styleUrls: ['./sistema-informacion.page.scss'],
})
export class SistemaInformacionPage implements OnInit {
  img_src = '../../assets/img/graph.png';
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  constructor() { }

  ngOnInit() {
  }

}
