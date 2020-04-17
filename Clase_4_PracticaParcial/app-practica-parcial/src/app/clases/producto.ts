
export class Producto {
  id:number;
  descripcion:String;
  tipo:Tipo;
  fechaVencimiento:Date;
  precio:number;
  rutaDeFoto:String;
    
    public constructor(id:number,descripcion:string,tipo:Tipo, fechaVencimiento:Date, precio:number, rutaDeFoto:String)
    {
        this.id=id;
        this.descripcion=descripcion;
        this.tipo=tipo;
        this.fechaVencimiento=fechaVencimiento;
        this.precio=precio;
        this.rutaDeFoto=rutaDeFoto;
    }
}

enum Tipo{
  solido,
  liquido
}