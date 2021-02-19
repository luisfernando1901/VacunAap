import { Component, OnInit } from '@angular/core';
import { FormArray,FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registro-personas',
  templateUrl: './registro-personas.page.html',
  styleUrls: ['./registro-personas.page.scss'],
})
export class RegistroPersonasPage implements OnInit {

  profileForm:FormGroup;

  constructor(private fb:FormBuilder,
              private http:HttpClient) {
    this.profileForm = this.fb.group({
      personasCargo: this.fb.array([
        this.fb.control('')
      ])
    });
  }

  ngOnInit() {
  }

  agregar(){
    this.personasCargo.push(this.fb.control(''));
  }

  get personasCargo() {
    return this.profileForm.get('personasCargo') as FormArray;
  }

  async onSubmit(){
    let personas:object = {};
    let array:string[];
    let array_aux:object[]=[];
    let url:string;
    const base_url = 'https://dni.optimizeperu.com/api/persons/';
    console.log("Se guardó en localStorage las personas bajo cuidado!");
    //console.log('console.log de this.personasCargo.value');
    //console.log(this.personasCargo.value);
    array = this.personasCargo.value;
    for (let index = 0; index < array.length; index++) {
      url = base_url + array[index];
     await this.http.get(url).toPromise().then(params => {
        array_aux.push(params);
      });
    }
    personas['cargo'] = array_aux;
    //console.log(personas);
    localStorage.setItem('bajoCuidado',JSON.stringify(personas));
  }

}
