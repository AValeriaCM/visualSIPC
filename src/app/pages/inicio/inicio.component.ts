import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }
  // tslint:disable-next-line: max-line-length
  slides = [{ image: 'https://www.cbi.eu/sites/default/files/styles/hero_banner_1920_x_480_big/public/market-information/visual/whitegrapes0010.jpg' }, { image: 'https://www.disbesa.com/img-apartat-1920-480/img-generic-header-09.jpg' }, { image: 'https://comunicacionbajoaragon.com/wp-content/uploads/2018/11/El-cultivo-de-cereales-alternativos-y-de-plantas-arom%C3%A1ticas-261183-comuniicaciion-bajo-aragon-cba-.jpg' }];

  ngOnInit(): void {

  }
}
