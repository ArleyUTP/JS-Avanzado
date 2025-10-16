import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pelicula } from '../models/Pelicula';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PeliculaServicio {

  private URL_API: string = 'http://localhost:3000/peliculas';

  constructor(private http: HttpClient) { }

  obtenerPeliculas(){
    return this.http.get<Pelicula[]>(this.URL_API);
  }

  crearPelicula(pelicula: Pelicula): Observable<Pelicula>{
    return this.http.post<Pelicula>(this.URL_API, pelicula);
  }
}
