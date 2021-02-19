import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  img_src = '../../assets/img/vacunAap_logo.png';
  profileForm = this.fb.group({
    dni: [''],
    fecha: [''],
  });
  constructor(private fb: FormBuilder,
              private http:HttpClient) { }

  ngOnInit() {
  }

  onSubmit(){
    const base_url = 'https://dni.optimizeperu.com/api/persons/';
    let url:string;
    url = base_url + this.profileForm.value['dni'];
    console.log(url);
    this.http.get(url).subscribe( params => {
      //console.log(params);
      params['fecha'] = this.profileForm.value['fecha'];
      localStorage.setItem('usuario',JSON.stringify(params));
      console.log('Se guardó en localStorage los datos asociados al dni');
    });
    //localStorage.setItem('dni',this.profileForm.value['dni']);
    //localStorage.setItem('fecha',this.profileForm.value['fecha']);
  }

}
