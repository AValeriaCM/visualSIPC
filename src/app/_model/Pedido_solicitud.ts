import { Producto } from './Producto';
import { Usuario } from './Usuario';
export class PedidoSolicitud{
    idPedidoSolicitud: number;
    cantidad: number;
    confirmacion: string;
    calificacion: number;
    usuario: Usuario;
    producto: Producto;
}
