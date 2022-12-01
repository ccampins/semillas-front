import { Router } from '@angular/router';
import { SemillasService } from 'src/app/services/semillas.service';
import { Component, OnInit } from '@angular/core';
import SemillasModel from 'src/app/models/semillas.model';

@Component({
  selector: 'app-create-semillas',
  templateUrl: './create-semillas.component.html',
  styleUrls: ['./create-semillas.component.css']
})
export class CreateSemillasComponent implements OnInit {

  constructor(private service: SemillasService,
    private router: Router) { }

  ngOnInit(): void {
  }

  create(newSemilla: SemillasModel){

  }

}
