import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaSemillasComponent } from './components/lista-semillas/lista-semillas.component';
import { FormularioSemillasComponent } from './components/formulario-semillas/formulario-semillas.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import SemillasModel from "./models/semillas.model";
import { CreateSemillasComponent } from './components/create-semillas/create-semillas.component';
import { UpdateSemillasComponent } from './components/update-semillas/update-semillas.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaSemillasComponent,
    FormularioSemillasComponent,
    CreateSemillasComponent,
    UpdateSemillasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		HttpClientModule,
    ReactiveFormsModule
    /* SemillasModel */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
