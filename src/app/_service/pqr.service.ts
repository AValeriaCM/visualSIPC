import { Pqr } from './../_model/Pqr';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PqrService {

  url = `${environment.HOST}/pqrs`;

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Pqr[]>(`${this.url}/listar`);
  }

  listarPorId(idPqr: number){
    return this.http.get<Pqr>(`${this.url}/listar/${idPqr}`);
  }

  guardar(pqr: Pqr) {
    return this.http.post(`${this.url}/guardar`, pqr);
  }

  eliminar(idPqr: number) {
    return this.http.delete(`${this.url}/eliminar/${idPqr}`);
  }

  editar(pqr: Pqr) {
    return this.http.put(`${this.url}/editar`, pqr);
  }
}
