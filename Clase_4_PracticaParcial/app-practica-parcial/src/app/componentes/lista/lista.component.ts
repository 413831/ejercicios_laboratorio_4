import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

import { Producto } from '../../clases/producto';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  @Input() listadoProductos: Producto[] ;
  @Output() productoSeleccionado: EventEmitter<any>= new EventEmitter<any>();
   
  constructor() { }

  ngOnInit(): void {
  }

  seleccionar(producto:Producto)
  {
    this.productoSeleccionado.emit(producto);
  }
}
