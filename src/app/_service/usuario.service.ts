import { Usuario } from './../_model/Usuario';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()

export class UsuarioService {

  url = `${environment.HOST}/usuarios`;
  mensajeCambio = new Subject<string>();
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any>(`${this.url}/listar`);
  }

  listarPorId(idUsuario: number){
    return this.http.get<Usuario>(`${this.url}/listar/${idUsuario}`);
  }

  guardar(usuario: Usuario) {
    return this.http.post(`${this.url}/guardar`, usuario);
  }

  eliminar(idUsuario: number) {
    return this.http.delete(`${this.url}/eliminar/${idUsuario}`);
  }

  editar(usuario: Usuario) {
    return this.http.put(`${this.url}/editar`, usuario);
  }
}
