import { CategoriaService } from './../../_service/categoria.service';
import { Categoria } from './../../_model/Categoria';
import { ProductoService } from './../../_service/producto.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Producto } from './../../_model/Producto';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  dataSource: any[];

  idCategoria: number;
  nombre: string;
  categoria: Categoria;
  catSelect: string;

  displayedColumns: any[] = ['codigo', 'nombre', 'descripcion', 'precioUnitario', 'precioMayorista', 'acciones'];
  dataSourceProductos = new MatTableDataSource<Producto>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  selectedValue: any;

  constructor(private productoService: ProductoService,
              private categoriaService: CategoriaService) { }
  idCat(event) {
    this.selectedValue = event.nombre;
    this.productoService.listarPorCategoria(this.nombre.toString()).subscribe(data => {
      this.dataSourceProductos = new MatTableDataSource(data);
      // this.productoService.paginator = this.paginator;
      // this.productoService.sort = this.sort;
    });
  }
  ngOnInit(): void {
    this.categoriaService.listar().subscribe(res => {
      this.dataSource = res;
    });
  }
}
