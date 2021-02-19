import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { HttpClient } from '@angular/common/http';

const { Geolocation } = Plugins;
declare var google;

@Component({
  selector: 'app-seleccion-local',
  templateUrl: './seleccion-local.page.html',
  styleUrls: ['./seleccion-local.page.scss'],
})
export class SeleccionLocalPage implements OnInit {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  geocoder:any;
  coordinates: object = {};
  constructor(private http:HttpClient) {
    this.getCurrentPosition();

  }

  //Esto debe estar si o si para que cargue el mapa luego de que la parte html haya cargado y encuentre el id.
  ionViewWillEnter() {
    this.loadMap();
  }

  ngOnInit() {
  }
  loadMap() {
    let latLng = new google.maps.LatLng(-12.068611, -77.036022);
    let mapOptions = {
      center: latLng,
      zoom: 13,
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.coordinates['latitud'] = coordinates.coords.latitude;
    this.coordinates['longitud'] = coordinates.coords.longitude;
    console.log(this.coordinates);
  }

  getUbicacion() {
    this.getCurrentPosition();
    let latLng2 = new google.maps.LatLng(this.coordinates['latitud'], this.coordinates['longitud']);
    var marker = new google.maps.Marker({
      position: latLng2
    });
    
    let mapOptions = {
      center: latLng2,
      zoom: 15,
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    // To add the marker to the map, call setMap();
    marker.setMap(this.map);
  }

  async getBusqueda(direc:string) {
    let aux:object;
    //console.log(direc);
    let location2 = direc;
    await this.http.get('https://maps.googleapis.com/maps/api/geocode/json',{params:{
      address:location2,
      key:'AIzaSyDpJcOpEWKn-2QkTVkndnDl8F2LeqUxRKo'
    }}).toPromise().then(param => aux = param['results'][0]['geometry']['location']);

    let latLng2 = new google.maps.LatLng(aux['lat'], aux['lng']);
    var marker = new google.maps.Marker({
      position: latLng2
    });
    
    let mapOptions = {
      center: latLng2,
      zoom: 15,
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    // To add the marker to the map, call setMap();
    marker.setMap(this.map);
    //Prueba de hospitales cercanos...
  }
}
