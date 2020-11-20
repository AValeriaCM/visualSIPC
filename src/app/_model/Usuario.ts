import { Rol } from './Rol';
export class Usuario{
    idUsuario: number;
    cedula: number;
    nombre: string;
    apellido: string;
    fechaNac: string;
    correo: string;
    celular: string;
    direccion: string;
    foto: string;
    estado: number;
    nick: string;
    contrasena: string;
    rol: Rol;
}
