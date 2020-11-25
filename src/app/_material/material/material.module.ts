import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatDividerModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDialogModule,
    MatCardModule,
    MatCarouselModule.forRoot()  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatDividerModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDialogModule,
    MatCardModule,
    MatCarouselModule  ]
})
export class MaterialModule {
// tslint:disable-next-line: max-line-length
slides = [{ image: 'https://www.cbi.eu/sites/default/files/styles/hero_banner_1920_x_480_big/public/market-information/visual/whitegrapes0010.jpg' }, { image: 'https://www.disbesa.com/img-apartat-1920-480/img-generic-header-09.jpg' }, { image: 'https://comunicacionbajoaragon.com/wp-content/uploads/2018/11/El-cultivo-de-cereales-alternativos-y-de-plantas-arom%C3%A1ticas-261183-comuniicaciion-bajo-aragon-cba-.jpg' }];
}
