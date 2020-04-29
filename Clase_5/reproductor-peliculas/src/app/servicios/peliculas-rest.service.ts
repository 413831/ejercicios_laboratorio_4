import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculasRESTService {
  private url = environment.urlPeliculas;
  constructor(private http: HttpClient) { }
  
  public obtenerPeliculas()
  {
    return this.http.get(this.url);
  }
}
