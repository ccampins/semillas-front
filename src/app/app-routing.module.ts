import { CreateSemillasComponent } from './components/create-semillas/create-semillas.component';
import { UpdateSemillasComponent } from './components/update-semillas/update-semillas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaSemillasComponent } from './components/lista-semillas/lista-semillas.component';

const routes: Routes = [
  {
    path: '', component: ListaSemillasComponent
  },
  {
    path: 'create', component: CreateSemillasComponent

  },
  {
    path: 'update/:id', component: UpdateSemillasComponent

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
