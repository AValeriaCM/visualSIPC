import { Categoria } from './../_model/Categoria';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  url = `${environment.HOST}/categorias`;

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Categoria[]>(`${this.url}/listar`);
  }

  listarPorId(idCategoria: number){
    return this.http.get<Categoria>(`${this.url}/listar/${idCategoria}`);
  }

  guardar(categoria: Categoria) {
    return this.http.post(`${this.url}/guardar`, categoria);
  }

  eliminar(idCategoria: number) {
    return this.http.delete(`${this.url}/eliminar/${idCategoria}`);
  }

}
