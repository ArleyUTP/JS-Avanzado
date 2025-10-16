import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ICiudad } from '../model/ciudad.interface';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {
  private URL = "http://localhost:3000/ciudades";
  http = inject(HttpClient);

  getAllCiudades() {
    return this.http.get<ICiudad[]>(this.URL);
  }
  createCiudad(ciudad: ICiudad) {
    return this.http.post<ICiudad>(this.URL, ciudad);
  }
}
