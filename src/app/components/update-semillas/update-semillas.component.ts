import { SemillasService } from 'src/app/services/semillas.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-semillas',
  templateUrl: './update-semillas.component.html',
  styleUrls: ['./update-semillas.component.css']
})
export class UpdateSemillasComponent implements OnInit {

  constructor(private service: SemillasService,
    private router: Router) { }

  ngOnInit(): void {
  }

}
