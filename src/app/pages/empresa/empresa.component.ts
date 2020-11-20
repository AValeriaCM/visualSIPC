import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { EmpresaService } from './../../_service/empresa.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Empresa } from './../../_model/Empresa';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  displayedColumns: string[] = ['foto', 'nombre', 'direccion', 'correo', 'telefono', 'acciones'];
  dataSource = new MatTableDataSource<Empresa>();

  @ViewChild(MatSort, { static : true }) sort: MatSort;

  cantidad: number;
  pageIndex = 0;
  pageSize = 5;

  constructor(private empresaService: EmpresaService,
              public route: ActivatedRoute,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.empresaService.listar().subscribe(data => {
      console.log(data);
      this.dataSource = new MatTableDataSource(data);
    });
  }

  listar(){
    this.empresaService.listar().subscribe(data => {
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
