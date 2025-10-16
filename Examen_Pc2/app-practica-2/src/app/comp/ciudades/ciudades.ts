import { Component, inject, OnInit } from '@angular/core';
import { CiudadService } from '../../service/ciudad-service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
  
import { ICiudad } from '../../model/ciudad.interface';

@Component({
  selector: 'app-ciudades',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ciudades.html',
  styleUrl: './ciudades.css'
})
export class Ciudades implements OnInit {

  ciudadeServicio = inject(CiudadService);

  ciudades$: Observable<ICiudad[]> | undefined;

  ngOnInit(): void {
    this.ciudades$ = this.ciudadeServicio.getAllCiudades();
  }

  ciudadFormulario= new FormGroup({
    nombre: new FormControl(''),
    pais: new FormControl('')
  })

  onSubmit() {
    if (this.ciudadFormulario.valid) {
      const nuevaCiudad: ICiudad = {
        id: null,
        nombre: this.ciudadFormulario.value.nombre || '',
        pais: this.ciudadFormulario.value.pais || ''
      };
      this.ciudadeServicio.createCiudad(nuevaCiudad).subscribe(()=>{
        this.ciudades$ = this.ciudadeServicio.getAllCiudades();
        this.ciudadFormulario.reset();
      }
      )
    };
  }
}
