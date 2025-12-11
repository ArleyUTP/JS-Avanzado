import { Component, Input } from '@angular/core';
import { IProducto } from '../models/IProducto';

@Component({
  selector: 'app-sitio-card',
  imports: [],
  templateUrl: './sitio-card.html',
  styleUrl: './sitio-card.css',
})
export class SitioCard {
  @Input() sitio!: IProducto;
}
