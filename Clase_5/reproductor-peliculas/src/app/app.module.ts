import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadopeliculasComponent } from './componentes/listadopeliculas/listadopeliculas.component';
import { DetallepeliculasComponent } from './componentes/detallepeliculas/detallepeliculas.component';
import { AdminpeliculasComponent } from './componentes/adminpeliculas/adminpeliculas.component';
import { FavoritopeliculasComponent } from './componentes/favoritopeliculas/favoritopeliculas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadopeliculasComponent,
    DetallepeliculasComponent,
    AdminpeliculasComponent,
    FavoritopeliculasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
