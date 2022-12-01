import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import SemillasModel from 'src/app/models/semillas.model';
import { SemillasService } from 'src/app/services/semillas.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-formulario-semillas',
  templateUrl: './formulario-semillas.component.html',
  styleUrls: ['./formulario-semillas.component.css']
})
export class FormularioSemillasComponent implements OnInit {

  semillas: SemillasModel[] = [];
  form: FormGroup;

  constructor(
		private formBuilder: FormBuilder,
    private service: SemillasService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      nombre: this.formBuilder.control('', [Validators.required]),
      codigo: this.formBuilder.control(null, [Validators.maxLength(3)]),
      descripcion: this.formBuilder.control('', [Validators.required]),
      especie: this.formBuilder.control('', [Validators.required]),
      origen: this.formBuilder.control('', [Validators.required]),
      proveedor: this.formBuilder.control(null),
      banco_de_semillas: this.formBuilder.control('', [Validators.required]),
      limite_minimo_thc: this.formBuilder.control(0, [Validators.required]),
      limite_maximo_thc: this.formBuilder.control(0, [Validators.required]),
      limite_minimo_cbd: this.formBuilder.control(0, [Validators.required]),
      limite_maximo_cbd: this.formBuilder.control(0, [Validators.required]),
    });
  }
  get codigo() { return this.form.get('codigo'); }
  get nombre() { return this.form.get('nombre'); }
  get descripcion() { return this.form.get('descripcion'); }
  get especie() { return this.form.get('especie'); }
  get origen() { return this.form.get('origen'); }
  get proveedor() { return this.form.get('proveedor'); }
  get banco_de_semillas() { return this.form.get('banco_de_semillas'); }
  get limite_minimo_thc() { return this.form.get('limite_minimo_thc'); }
  get limite_maximo_thc() { return this.form.get('limite_maximo_thc'); }
  get limite_minimo_cbd() { return this.form.get('limite_minimo_cbd'); }
  get limite_maximo_cbd() { return this.form.get('limite_maximo_cbd'); }

  ngOnInit(): void {
    
  }

  submit(): void {
    if (this.form.valid) {
      Swal.fire('Create Successfully!','El formulario se envio correctamente','success');
      this.service.createSemillas(this.form.value).subscribe(resp => {
        if(resp){
          this.router.navigate(['/#']);
        }
      })
    } else {
      Swal.fire('Error','Complete coorrectamente los campos del formulario','error');
    }
  }

}
