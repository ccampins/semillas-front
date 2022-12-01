import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import SemillasModel from '../models/semillas.model';

const URL_API = environment.apiUrl
const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json', 
  })
}
@Injectable({
  providedIn: 'root'
})
export class SemillasService {

  constructor(private http: HttpClient) { }

  readSemillas():Observable<SemillasModel[]>{
    return this.http.get<SemillasModel[]>(URL_API.concat('/semillas/read'), httpOptions);
  }

  createSemillas(newSemilla: SemillasModel):Observable<any> {
    return this.http.post(URL_API.concat('/semillas/create'), JSON.stringify(newSemilla));
  }

  updateSemillas(updatedSemilla: SemillasModel): Observable<any> {
    return this.http.put(URL_API.concat('semillas/update/').concat((updatedSemilla.id ? updatedSemilla.id.toString() : '')), JSON.stringify(updatedSemilla));
  }

  deleteSemillas(id: number | undefined): Observable<any> {
    return this.http.delete(URL_API.concat('/semillas/delete/').concat((id ? id.toString() : '')));
  }
  
}
