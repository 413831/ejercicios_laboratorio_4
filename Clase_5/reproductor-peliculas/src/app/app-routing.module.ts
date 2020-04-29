import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminpeliculasComponent } from './componentes/adminpeliculas/adminpeliculas.component'

const routes: Routes = [
  {path: '', component: AdminpeliculasComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
