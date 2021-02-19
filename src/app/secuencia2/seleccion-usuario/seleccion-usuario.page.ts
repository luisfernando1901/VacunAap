import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seleccion-usuario',
  templateUrl: './seleccion-usuario.page.html',
  styleUrls: ['./seleccion-usuario.page.scss'],
})
export class SeleccionUsuarioPage implements OnInit {
  img_src = '../../assets/img/familia.jpg';
  //Este es el array de todos los usuarios
  usuarios:string[] = [];
  usuario_ingresa:string;

  constructor(private router:Router) {
    //Cargamos los usuarios
    let usuario:object, cargo:object,array:string[];
    usuario = JSON.parse(localStorage.getItem('usuario'));
    this.usuarios.push(usuario['name']);
    cargo = JSON.parse(localStorage.getItem('bajoCuidado'));
    array = cargo['cargo'];
    for (let index = 0; index < array.length; index++) {
      this.usuarios.push(array[index]['name']);
    }
    //console.log(this.usuarios);
  }

  ngOnInit() {
  }

  onClick(usuario:string){
    this.usuario_ingresa = usuario;
    console.log(this.usuario_ingresa);
  }

  siguiente(){
    let usuario_ingresado:object = {};
    let confirmado:string, vacunado:string;
    usuario_ingresado['usuario_seleccionado'] = this.usuario_ingresa;
    localStorage.setItem('usuario_seleccionado',JSON.stringify(usuario_ingresado));
    confirmado = localStorage.getItem('confirmacion');
    vacunado = localStorage.getItem('vacunado');
    console.log(confirmado);
    if(confirmado == 'aceptada'){
      if(vacunado == 'si'){
        this.router.navigate(['/sistema-informacion']);
      }
      else{
        this.router.navigate(['/confirmacion-aceptada']);
      }
    }
  }
}
