import { Empresa } from './../_model/Empresa';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  url = `${environment.HOST}/empresas`;

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Empresa[]>(`${this.url}/listar`);
  }

  listarPorId(idEmpresa: number){
    return this.http.get<Empresa>(`${this.url}/listar/${idEmpresa}`);
  }

  guardar(empresa: Empresa) {
    return this.http.post(`${this.url}/guardar`, empresa);
  }

  eliminar(idEmpresa: number) {
    return this.http.delete(`${this.url}/eliminar/${idEmpresa}`);
  }

  editar(empresa: Empresa) {
    return this.http.put(`${this.url}/editar`, empresa);
  }
}
