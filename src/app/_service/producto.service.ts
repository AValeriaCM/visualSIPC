import { Subject } from 'rxjs';
import { Producto } from './../_model/Producto';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url = `${environment.HOST}/productos`;
  mensajeCambio = new Subject<string>();

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Producto[]>(`${this.url}/listar`);
  }

  listarPorId(idProducto: number){
    return this.http.get<Producto>(`${this.url}/listar/${idProducto}`);
  }

  listarPorCategoria(categoria: string){
    return this.http.get<Producto[]>(`${this.url}/listarNombreCategoria/${categoria}`);
  }

  listarPorEmpresa(){

  }

  guardar(producto: Producto) {
    return this.http.post(`${this.url}/guardar`, producto);
  }

  eliminar(idProducto: number) {
    return this.http.delete(`${this.url}/eliminar/${idProducto}`);
  }

  editar(producto: Producto) {
    return this.http.put(`${this.url}/editar`, producto);
  }
}
