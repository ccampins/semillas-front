import { FormularioSemillasComponent } from './../formulario-semillas/formulario-semillas.component';
import { SemillasService } from 'src/app/services/semillas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import SemillasModel from 'src/app/models/semillas.model';

@Component({
  selector: 'app-update-semillas',
  templateUrl: './update-semillas.component.html',
  styleUrls: ['./update-semillas.component.css']
})
export class UpdateSemillasComponent implements OnInit {

@ViewChild(FormularioSemillasComponent)
form! : FormularioSemillasComponent;

  constructor(
    private service: SemillasService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      let id = params.id;
      this.service.showSemilla(id).subscribe((semilla:any)=> {
        // console.log('coso', semilla.id);
        let semillasJsaon = 
          {
            id:semilla.id,
            nombre:semilla.nombre,
            codigo:semilla.codigo,
            descripcion:semilla.descripcion,
            especie:semilla.especie,
            origen:semilla.origen,
            proveedor:semilla.proveedor,
            banco_de_semillas:semilla.bancoDeSemillas,
            limite_minimo_thc:semilla.limiteMinimoThc,
            limite_maximo_thc:semilla.limiteMaximoThc,
            limite_minimo_cbd:semilla.limiteMinimoCbd,
            limite_maximo_cbd:semilla.limiteMaximoCbd
        }
        
        this.form.show(semillasJsaon);
      })
    })
  }

}
