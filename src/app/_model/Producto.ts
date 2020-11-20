import { Finca } from './Finca';
import { Empresa } from './Empresa';
export class Producto{
    idProducto: number;
    codigo: number;
    nombre: string;
    descripcion: string;
    foto: string;
    precioUnitario: number;
    precioMayorista: number;
    empresa: Empresa;
    finca: Finca;
}