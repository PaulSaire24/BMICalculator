import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ResultadoComponent } from './components/resultado/resultado.component';

const routes: Routes = [
  {path: '', component: InicioComponent}, // este es el vacio
  {path: 'resultado/:valor', component: ResultadoComponent}, // este es el resultado ; el :valor es para chapar el valor que se envia al calcular
  {path: '**',redirectTo:''} // cuando el usuario pone cualquie cosa le redireciona la vacio
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
