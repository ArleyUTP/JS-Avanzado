import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Elemento } from '../models/Elemento';

@Injectable({
  providedIn: 'root',
})
export class ElementoService {
  readonly http: HttpClient = inject(HttpClient);

  URL_BASE = 'http://localhost:3000/elementos';

  obtenerElementos() {
    return this.http.get<Elemento[]>(this.URL_BASE);
  }

  crearELemento(elemento: Elemento) {
    return this.http.post<Elemento>(this.URL_BASE, elemento);
  }

  actualizarElemento(id:number, elemento: Elemento) {
    return this.http.put<Elemento>(`${this.URL_BASE}/${id}`, elemento);
  }

  eliminarElemento(id: number) {
    return this.http.delete<void>(`${this.URL_BASE}/${id}`);
  }
}
