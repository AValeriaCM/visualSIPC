import { Finca } from './../../../_model/Finca';
import { Categoria } from './../../../_model/Categoria';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FincaService } from './../../../_service/finca.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregarfinca',
  templateUrl: './agregarfinca.component.html',
  styleUrls: ['./agregarfinca.component.css']
})
export class AgregarfincaComponent implements OnInit {
  selectedValue: any;
  form: FormGroup;

  private id: number;
  private edicion: boolean;
  //rol = 4;
  //tipoDocumento = 1;

  constructor(private fincaService: FincaService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.edicion = params['id'] != null;
    });
    this.inicializarFormularioVacio();
    if (this.edicion === true) {
      this.cargarDatos();
    }
  }

  inicializarFormularioVacio() {
    this.form = new FormGroup({
      'nombre': new FormControl('', [Validators.required, Validators.maxLength(12)]),
      'direccion': new FormControl('', [Validators.required, Validators.maxLength(20)]),
      'telefono': new FormControl('', [Validators.required, Validators.maxLength(20)]),
      'celular': new FormControl('', [Validators.required]),
      'correo': new FormControl('', [Validators.required, Validators.email]),
      'foto': new FormControl('', [Validators.required])
    });
  }

  cargarDatos() {
    this.fincaService.listarPorId(this.id).subscribe(data => {
      this.form.get("nombre").setValue(data.nombre);
      this.form.get("direccion").setValue(data.direccion);
      this.form.get("telefono").setValue(data.telefono);
      this.form.get("celular").setValue(data.celular);
      this.form.get("correo").setValue(data.correo);
      this.form.get("foto").setValue(data.foto);
    });
  }

  guardar() {
    let finca = new Finca();
    finca.nombre = this.form.value['nombre'];
    finca.direccion = this.form.value['direccion'];
    finca.telefono = this.form.value['telefono'];
    finca.celular = this.form.value['celular'];
    finca.correo = this.form.value['correo'];
    finca.foto = this.form.value['foto'];
    finca.usuario.idUsuario = this.id;

    this.fincaService.guardar(finca).subscribe(() => {
      this.form.reset();
      this.fincaService.mensajeCambio.next('Finca guardada satisfactoriamente');
      this.router.navigate(['/fincas']);
    });
    console.log('INGRESA GUARDAR');


  }

  get nombre() {
    return this.form.get('nombre');
  }
  get direccion() {
    return this.form.get('direccion');
  }
  get telefono() {
    return this.form.get('telefono');
  }
  get celular() {
    return this.form.get('celular');
  }
  get correo() {
    return this.form.get('correo');
  }
  get foto() {
    return this.form.get('foto');
  }

}
