import { UsuarioService } from './../../_service/usuario.service';
import { Usuario } from './../../_model/Usuario';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  displayedColumns: string[] = ['foto', 'nombre', 'apellido', 'correo'];
  dataSource = new MatTableDataSource<Usuario>();

  @ViewChild(MatSort, { static : true }) sort: MatSort;

  cantidad: number;
  pageIndex = 0;
  pageSize = 5;

  constructor(private usuarioService: UsuarioService,
              public route: ActivatedRoute,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.usuarioService.listar().subscribe(data => {
      console.log(data);
      this.dataSource = new MatTableDataSource(data);
    });
  }

  listar(){
    this.usuarioService.listar().subscribe(data => {
      console.log(data);
      this.dataSource = new MatTableDataSource(data);
    });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Información', {
      duration: 3000,
    });
  }

  cambiarPagina(e: any) {
    this.pageIndex = e.pageIndex;
    this.pageSize = e.pageSize;
    this.listar();
}

}
