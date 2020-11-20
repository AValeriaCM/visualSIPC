import { PedidoSolicitud } from './../_model/Pedido_solicitud';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidoSolicitudService {

  url = `${environment.HOST}/listar`;

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<PedidoSolicitud[]>(`${this.url}/listar`);
  }

  guardar(pedido: PedidoSolicitud) {
    return this.http.post(`${this.url}/guardar`, pedido);
  }
}
