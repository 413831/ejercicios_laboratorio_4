import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Producto } from '../../clases/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})

export class ProductoComponent implements OnInit {
  @Output() altaProducto: EventEmitter<any>= new EventEmitter<any>();
  producto:Producto;
  
  
  constructor() { }

  ngOnInit(): void {
  }

  nuevoProducto()
  {
    console.info("Nuevo Producto");
    this.producto= new Producto(0, '' , 0, new Date(), 0, '');
  }
  
  crearProducto()
  {
    console.info("Crear Producto");
    this.altaProducto.emit(this.producto);
    this.producto=null;
  }

}

