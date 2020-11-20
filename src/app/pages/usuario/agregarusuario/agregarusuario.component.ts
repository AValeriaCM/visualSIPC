import { Rol } from './../../../_model/Rol';
import { Usuario } from './../../../_model/Usuario';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuarioService } from './../../../_service/usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregarusuario',
  templateUrl: './agregarusuario.component.html',
  styleUrls: ['./agregarusuario.component.css']
})
export class AgregarusuarioComponent implements OnInit {

  selectedValue: any;
  form: FormGroup;
  //dataSource: MatTableDataSource<Ciudad>;
  //listaDepartamentos: Departamento[];
  //listaCiudades: Ciudad[];
  //valorSelect: string;
  //ciudadSelect: string;
  private id: number;
  private edicion: boolean;
  rol = 4;
  tipoDocumento = 1;

  constructor(private usuarioService: UsuarioService,
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
      'cedula': new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
      'nombre': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      'apellido': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      'nick': new FormControl('', [Validators.required]),
      'contrasena': new FormControl('', [Validators.required]),
      'direccion': new FormControl('', [Validators.required]),
      'celular': new FormControl('', [Validators.required, Validators.maxLength(10)]),
      'correo': new FormControl('', [Validators.required, Validators.email]),
      'fechaNacimiento': new FormControl('', [Validators.required]),
      'foto': new FormControl('', [Validators.required])
    });
  }

  cargarDatos(){
    this.usuarioService.listarPorId(this.id).subscribe(data => {
      this.form.get("cedula").setValue(data.cedula);
      this.form.get("nombre").setValue(data.nombre);
      this.form.get("apellido").setValue(data.apellido);
      this.form.get("nick").setValue(data.nick);
      this.form.get("clave").setValue(data.contrasena);
      this.form.get("direccion").setValue(data.direccion);
      this.form.get("celular").setValue(data.celular);
      this.form.get("correo").setValue(data.correo);
      this.form.get("fechaNacimiento").setValue(data.fechaNac);
      this.form.get("foto").setValue(data.foto);
    });
  }

  guardar() {
    let usuario = new Usuario();
    usuario.cedula = this.form.value['cedula'];
    usuario.nombre = this.form.value['nombre'];
    usuario.apellido = this.form.value['apellido'];
    usuario.nick = this.form.value['nick'];
    usuario.contrasena = this.form.value['contrasena'];
    usuario.direccion = this.form.value['direccion'];
    usuario.celular = this.form.value['celular'];
    usuario.correo = this.form.value['correo'];
    usuario.fechaNac = this.form.value['fechaNacimiento'];
    usuario.foto = this.form.value['foto'];
    let rol = new Rol();
    rol.idRol = 4;
    usuario.rol = rol;

    if (this.edicion === true){
      usuario.idUsuario = this.id;
      this.usuarioService.editar(usuario).subscribe(data => {
        this.form.reset();
        this.usuarioService.mensajeCambio.next('Usuario actualizado satisfactoriamente');
        this.router.navigate(['/usuarios']);
      });
    } else{
      this.usuarioService.guardar(usuario).subscribe(() => {
        this.form.reset();
        this.usuarioService.mensajeCambio.next('Usuario guardado satisfactoriamente');
        this.router.navigate(['/usuarios']);
      });
      console.log('INGRESA GUARDAR');
    }

  }


  get cedula() {
    return this.form.get('cedula');
  }
  get nombre() {
    return this.form.get('nombre');
  }
  get apellido() {
    return this.form.get('apellido');
  }
  get nick() {
    return this.form.get('nick');
  }
  get contrasena() {
    return this.form.get('contrasena');
  }
  get direccion() {
    return this.form.get('direccion');
  }
  get correo() {
    return this.form.get('correo');
  }
  get celular() {
    return this.form.get('celular');
  }
  get fechaNac() {
    return this.form.get('fechaNac');
  }
  get foto() {
    return this.form.get('foto');
  }
}
