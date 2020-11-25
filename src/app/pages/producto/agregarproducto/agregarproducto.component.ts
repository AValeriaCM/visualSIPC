import { Producto } from './../../../_model/Producto';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductoService } from './../../../_service/producto.service';
import { UsuarioService } from './../../../_service/usuario.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregarproducto',
  templateUrl: './agregarproducto.component.html',
  styleUrls: ['./agregarproducto.component.css']
})
export class AgregarproductoComponent implements OnInit {

  

  selectedValue: any;
  form: FormGroup;
  private id: number;
  private edicion: boolean;
  rol = 4;
  tipoDocumento = 1;

  constructor(private productoService: ProductoService,
              private snackBar: MatSnackBar,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.edicion = params['id'] != null;
    });
    this.inicializarFormularioVacio();
    if (this.edicion === true){
      this.cargarDatos();
    }
  }

  inicializarFormularioVacio(){
    this.form = new FormGroup({
      'nombre': new FormControl('', [Validators.required, Validators.maxLength(12)]),
      'descripcion': new FormControl('', [Validators.required, Validators.maxLength(20)]),
      'foto': new FormControl('', [Validators.required, Validators.maxLength(20)]),
      'precioUnitario': new FormControl('', [Validators.required]),
      'precioMayorista': new FormControl('', [Validators.required])
      
    });
  }

  cargarDatos(){
    this.productoService.listarPorId(this.id).subscribe(data => {
      this.form.get("nombre").setValue(data.nombre);
      this.form.get("descripcion").setValue(data.descripcion);
      this.form.get("foto").setValue(data.foto);
      this.form.get("precioUnitario").setValue(data.precioUnitario);
      this.form.get("precioMayorista").setValue(data.precioMayorista);
    });
  }

  guardar() {
    let producto = new Producto();
    producto.nombre = this.form.value['nombre'];
    producto.descripcion = this.form.value['descripcion'];
    producto.foto = this.form.value['foto'];
    producto.precioUnitario = this.form.value['precioUnitario'];
    producto.precioMayorista = this.form.value['precioMayorista'];

    if (this.edicion === true){
      producto.idProducto = this.id;
      this.productoService.editar(producto).subscribe(data => {
        this.form.reset();
        this.productoService.mensajeCambio.next('Producto actualizado satisfactoriamente');
        this.router.navigate(['/productos']);
      });
    } else{
      this.productoService.guardar(producto).subscribe(() => {
        this.form.reset();
        this.productoService.mensajeCambio.next('Producto guardado satisfactoriamente');
        this.router.navigate(['/productos']);
      });
      console.log('INGRESA GUARDAR');
    }

  }


  get nombre() {
    return this.form.get('nombre');
  }
  get descripcion() {
    return this.form.get('descripcion');
  }
  get foto() {
    return this.form.get('foto');
  }
  get precioUnitario() {
    return this.form.get('precioUnitario');
  }
  get precioMayorista() {
    return this.form.get('precioMayorista');
  }

}
