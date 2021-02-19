import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'registro-personas',
    children:[
      {
        path: '', 
        loadChildren: () => import('./secuencia1/registro-personas/registro-personas.module').then( m => m.RegistroPersonasPageModule)
      },
      {
        path: 'seleccion-local', 
        loadChildren: () => import('./secuencia1/seleccion-local/seleccion-local.module').then(m => m.SeleccionLocalPageModule)
      },
      {
        path: 'espera-confirmacion',
        loadChildren: () => import('./secuencia1/espera-confirmacion/espera-confirmacion.module').then( m => m.EsperaConfirmacionPageModule)
      },
    ],
  },
  {
    path: 'seleccion-usuario',
    loadChildren: () => import('./secuencia2/seleccion-usuario/seleccion-usuario.module').then( m => m.SeleccionUsuarioPageModule)
  },
  {
    path: 'sistema-informacion',
    loadChildren: () => import('./secuencia2/sistema-informacion/sistema-informacion.module').then( m => m.SistemaInformacionPageModule)
  },
  {
    path: 'signos-sintomas',
    loadChildren: () => import('./secuencia2/signos-sintomas/signos-sintomas.module').then( m => m.SignosSintomasPageModule)
  },
  {
    path: 'emergencia',
    loadChildren: () => import('./secuencia2/emergencia/emergencia.module').then( m => m.EmergenciaPageModule)
  },
  {
    path: 'recomendaciones',
    loadChildren: () => import('./secuencia2/recomendaciones/recomendaciones.module').then( m => m.RecomendacionesPageModule)
  },
  {
    path: 'confirmacion-aceptada',
    loadChildren: () => import('./secuencia1/confirmacion-aceptada/confirmacion-aceptada.module').then( m => m.ConfirmacionAceptadaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
