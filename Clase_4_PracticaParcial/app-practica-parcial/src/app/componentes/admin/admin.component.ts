import { Component, OnInit } from '@angular/core';
import { Producto } from '../../clases/producto'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  productos:Producto[];
  producto: Producto;

  constructor() { 
    localStorage.setItem("productos",JSON.stringify(this.productos));
  }

  ngOnInit(): void {
  }
  
  alta(producto:Producto)
  {
    this.productos = JSON.parse(localStorage.getItem("productos"));
    this.productos.push(producto);
    localStorage.setItem("productos",JSON.stringify(this.productos));
  }
  
  baja(producto:Producto)
  {
    this.productos = JSON.parse(localStorage.getItem("productos"));
    let index = this.productos.indexOf(producto); 
    this.productos.splice(index,1);
    localStorage.setItem("productos",JSON.stringify(this.productos));
  }
  
  seleccionarProducto(producto:Producto)
  {
    this.producto = producto;
  }
}
