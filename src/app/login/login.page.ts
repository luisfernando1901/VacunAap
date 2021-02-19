import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  img_src = '../../assets/img/vacunAap_logo.png';
  profileForm = this.fb.group({
    dni: [''],
    fecha: [''],
  });
  constructor(private fb: FormBuilder,
              private router:Router) { }

  ngOnInit() {
  }

  validar(){
    let usuario:object, usuario_val:object;
    //Valores ingresados
    usuario = this.profileForm.value;
    console.log(usuario);
    //Consulto los valores en local
    usuario_val = JSON.parse(localStorage.getItem('usuario'));
    console.log(usuario_val)
    if(usuario['dni'] == usuario_val['dni'] && usuario['fecha'] == usuario_val['fecha'] ){
      console.log('Validado!');
      this.router.navigate(['/seleccion-usuario']);
    }
    


  }

}
