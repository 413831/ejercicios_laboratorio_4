import { Component, OnInit } from '@angular/core';
import { PeliculasRESTService } from '../../servicios/peliculas-rest.service';

@Component({
  selector: 'app-adminpeliculas',
  templateUrl: './adminpeliculas.component.html',
  styleUrls: ['./adminpeliculas.component.css']
})
export class AdminpeliculasComponent implements OnInit {
  peliculas:any[] = [];
  
  constructor(private servicio: PeliculasRESTService) { }

  ngOnInit(): void {
    this.servicio.obtenerPeliculas().subscribe(resultado => {
        console.log(resultado);
        this.peliculas.push(resultado);
        console.log(this.peliculas[0].Title);
    }, error => {
      console.log(error)
    });
  }

}
