import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ListadoComponent } from './components/listado/listado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from  '@angular/common/http';
import { ServicioService } from './servicios/servicio.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DetalleComponent,
    BuscadorComponent,
    ListadoComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
