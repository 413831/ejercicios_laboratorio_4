import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'app-listadopeliculas',
  templateUrl: './listadopeliculas.component.html',
  styleUrls: ['./listadopeliculas.component.css']
})
export class ListadopeliculasComponent implements OnInit {
  @Input() listadoPeliculas;

  constructor() { }

  ngOnInit(): void {
  }

}
