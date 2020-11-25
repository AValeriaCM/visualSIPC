import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { MaterialModule } from './_material/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { PqrComponent } from './pages/pqr/pqr.component';
import { NotificacionComponent } from './pages/notificacion/notificacion.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FincaComponent } from './pages/finca/finca.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { PedidoSolicitudComponent } from './pages/pedido-solicitud/pedido-solicitud.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { Not404Component } from './pages/not404/not404.component';
import { Error500Component } from './pages/error500/error500.component';
import { AgregarfincaComponent } from './pages/finca/agregarfinca/agregarfinca.component';
import { AgregarusuarioComponent } from './pages/usuario/agregarusuario/agregarusuario.component';
import { AgregarproductoComponent } from './pages/producto/agregarproducto/agregarproducto.component';
import { AgregarempresaComponent } from './pages/empresa/agregarempresa/agregarempresa.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    Not404Component,
    PqrComponent,
    NotificacionComponent,
    EmpresaComponent,
    FincaComponent,
    ProductoComponent,
    PedidoSolicitudComponent,
    InicioComponent,
    Error500Component,
    AgregarfincaComponent,
    AgregarusuarioComponent,
    AgregarproductoComponent,
    AgregarempresaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatCarouselModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
