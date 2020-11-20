import { Notificacion } from './../_model/Notificacion';
import { Pqr } from './../_model/Pqr';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {

  url = `${environment.HOST}/notificaciones`;

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Notificacion[]>(`${this.url}/listar`);
  }

  listarPorId(idNotificacion: number){
    return this.http.get<Notificacion>(`${this.url}/listar/${idNotificacion}`);
  }

  guardar(notificacion: Notificacion) {
    return this.http.post(`${this.url}/guardar`, notificacion);
  }

  eliminar(idNotificacion: number) {
    return this.http.delete(`${this.url}/eliminar/${idNotificacion}`);
  }

  editar(notificacion: Notificacion) {
    return this.http.put(`${this.url}/editar`, notificacion);
  }
}
