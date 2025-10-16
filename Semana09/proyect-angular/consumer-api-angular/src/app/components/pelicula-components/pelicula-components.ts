import { Component, OnInit } from '@angular/core';
import { PeliculaServicio } from '../../service/pelicula-servicio';
import { Pelicula } from '../../models/Pelicula';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-pelicula-components',
  imports: [ReactiveFormsModule],
  templateUrl: './pelicula-components.html',
  styleUrl: './pelicula-components.css'
})
export class PeliculaComponents implements OnInit{

  peliculas: Pelicula[] = [];
  constructor(private peliculaServicio: PeliculaServicio) {
  }

  peliculaForm = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl(''),
    director: new FormControl(''),
    clasificacion: new FormControl('')
  })
  ngOnInit(): void {
  }

  cargarPeliculas(): void {
    this.peliculaServicio.obtenerPeliculas().subscribe(data => {
      this.peliculas = data;
    });
  }

  agregarPelicula(): void {
    console.log(this.peliculaForm.value);


    if (isNaN(Number(this.peliculaForm.value.id))) {
      alert('ID debe ser un número');
      return;
    }

    const peliculaNueva: Pelicula = {
      id : Number(this.peliculaForm.value.id)===0? null : Number(this.peliculaForm.value.),
      nombre: String(this.peliculaForm.value.nombre),
      director: String(this.peliculaForm.value.director),
      clasificacion: String(this.peliculaForm.value.clasificacion)
    };
    this.peliculaServicio.crearPelicula(peliculaNueva).subscribe(data => {
      console.log('Pelicula creada:', data);
      this.cargarPeliculas(); // Recargar la lista de películas después de agregar una nueva
    });
  }
}
