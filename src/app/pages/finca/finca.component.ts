import { MatSort } from '@angular/material/sort';
import { Finca } from './../../_model/Finca';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { FincaService } from './../../_service/finca.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-finca',
  templateUrl: './finca.component.html',
  styleUrls: ['./finca.component.css']
})
export class FincaComponent implements OnInit {

  displayedColumns: string[] = ['foto', 'nombre', 'direccion', 'correo', 'telefono', 'acciones'];
  dataSource = new MatTableDataSource<Finca>();

  @ViewChild(MatSort, { static : true }) sort: MatSort;

  cantidad: number;
  pageIndex = 0;
  pageSize = 5;

  constructor(private fincaService: FincaService,
              public route: ActivatedRoute,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.fincaService.listar().subscribe(data => {
      console.log(data);
      this.dataSource = new MatTableDataSource(data);
    });
  }

  listar(){
    this.fincaService.listar().subscribe(data => {
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
