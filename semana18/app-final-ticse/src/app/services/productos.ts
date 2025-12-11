import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IProducto } from '../components/models/IProducto';

@Injectable({
  providedIn: 'root',
})
export class Productos {

  URL_API = "http://localhost:3000/sitio"
  clienteHttp: HttpClient = inject(HttpClient);

  obtenerProductos(){
    return this.clienteHttp.get<IProducto[]>(this.URL_API);
  }
}
