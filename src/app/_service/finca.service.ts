import { Subject } from 'rxjs';
import { Finca } from './../_model/Finca';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FincaService {

  url = `${environment.HOST}/fincas`;
  mensajeCambio = new Subject<string>();

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Finca[]>(`${this.url}/listar`);
  }

  listarPorId(idFinca: number){
    return this.http.get<Finca>(`${this.url}/listar/${idFinca}`);
  }

  guardar(finca: Finca) {
    return this.http.post(`${this.url}/guardar`, finca);
  }

  eliminar(idFinca: number) {
    return this.http.delete(`${this.url}/eliminar/${idFinca}`);
  }

  editar(finca: Finca) {
    return this.http.put(`${this.url}/editar`, finca);
  }
}
