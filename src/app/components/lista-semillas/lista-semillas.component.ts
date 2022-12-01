import { SemillasService } from './../../services/semillas.service';
import { Component, OnInit } from '@angular/core';
import SemillasModel from 'src/app/models/semillas.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-semillas',
  templateUrl: './lista-semillas.component.html',
  styleUrls: ['./lista-semillas.component.css']
})
export class ListaSemillasComponent implements OnInit {

  semillas: SemillasModel[] = [];
  constructor(private service: SemillasService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.loadAllSemillas()
  }

  loadAllSemillas(): void {
    this.service.readSemillas().subscribe((resp: SemillasModel[]) => {
      this.semillas = resp;
    })
  }

  deleteSemilla(id: number | undefined): void {
    this.service.deleteSemillas(id).subscribe((resp: SemillasModel[]) => {
      if(resp){
        this.service.readSemillas().subscribe((resp: SemillasModel[]) => {
          this.semillas = resp;
        })
      }
    })
  }

  /* updateSemillas(id: number){
    this.service.updateSemillas(id).subscribe((resp: SemillasModel[]) => {})
  } */

}
