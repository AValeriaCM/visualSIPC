import { ProductoService } from './_service/producto.service';
import { UsuarioService } from './_service/usuario.service';
import { Component } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngbmodule/material-carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsuarioService, ProductoService]
})
export class AppComponent {
  title = 'SIPC-Front';
  primary = '#02611a';
  // tslint:disable-next-line: max-line-length
  slides = [{ 'image': 'https://gsr.dev/material2-carousel/assets/demo.png' }, { 'image': 'https://gsr.dev/material2-carousel/assets/demo.png' }, { 'image': 'https://gsr.dev/material2-carousel/assets/demo.png' }, { 'image': 'https://gsr.dev/material2-carousel/assets/demo.png' }, { 'image': 'https://gsr.dev/material2-carousel/assets/demo.png' }];
}
