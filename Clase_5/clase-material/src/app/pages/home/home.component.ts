import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicios/servicio.service';

import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private miservicio: ServicioService) {
    
  
   }

  ngOnInit(): void {
    this.miservicio.obtenerPaises().subscribe(resultado => {
        console.log(resultado);
    }, error => {
      console.log("error")
    });
  }

}
