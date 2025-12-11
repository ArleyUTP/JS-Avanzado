import { Component, inject, OnInit, signal } from '@angular/core';
import { Productos } from '../../services/productos';
import { IProducto } from '../models/IProducto';
import { SitioCard } from "../sitio-card/sitio-card";

@Component({
  selector: 'app-sitios',
  imports: [SitioCard],
  templateUrl: './sitios.html',
  styleUrl: './sitios.css',
})
export class Sitios implements OnInit {
  productos = signal<IProducto[]>([]);
  service = inject(Productos)
  ngOnInit(): void {
    this.service.obtenerProductos().subscribe((data) => {
      this.productos.set(data);
    });
  }

}