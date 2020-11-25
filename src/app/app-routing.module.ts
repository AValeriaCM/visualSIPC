import { LoginComponent } from './pages/login/login.component';
import { AgregarfincaComponent } from './pages/finca/agregarfinca/agregarfinca.component';
import { AgregarusuarioComponent } from './pages/usuario/agregarusuario/agregarusuario.component';
import { Not404Component } from './pages/not404/not404.component';
import { Error500Component } from './pages/error500/error500.component';
import { PedidoSolicitudComponent } from './pages/pedido-solicitud/pedido-solicitud.component';
import { CategoriaService } from './_service/categoria.service';
import { FincaComponent } from './pages/finca/finca.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';
import { NotificacionComponent } from './pages/notificacion/notificacion.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { PqrComponent } from './pages/pqr/pqr.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'usuarios', component: UsuarioComponent, children: [
    {path: 'agregar', component: AgregarusuarioComponent}
  ]},
  {path: 'pqr', component: PqrComponent},
  {path: 'productos', component: ProductoComponent},
  {path: 'notificaciones', component: NotificacionComponent},
  {path: 'empresas', component: EmpresaComponent},
  {path: 'fincas', component: FincaComponent, children:[
    {path: 'agregar', component: AgregarfincaComponent}
  ]},
  {path: 'categorias', component: CategoriaService},
  {path: 'pedido', component: PedidoSolicitudComponent},
  {path: 'error500', component: Error500Component},
  {path: 'not404', component: Not404Component},
  {path: '**', redirectTo: 'not404', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
