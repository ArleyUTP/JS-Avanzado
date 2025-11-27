import { Component, inject, OnInit, signal } from '@angular/core';
import { ElementoService } from '../../services/elemento-service';
import { Elemento } from '../../models/Elemento';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-elementos',
  imports: [ReactiveFormsModule],
  templateUrl: './elementos.html',
  styleUrl: './elementos.css',
})
export class Elementos implements OnInit {
  onSubmit($event: Event) {
    $event.preventDefault();
    if (this.elementoSelected()) {
      const id = this.elementoSelected()!.id;
      this.elementosService
        .actualizarElemento(id, this.formulario.value as Elemento)
        .subscribe(() => {
          this.cargarElementos();
          this.limpiarFormulario();
        });
    } else {
      this.elementosService
        .crearELemento({
          ...(this.formulario.value as Elemento),
        })
        .subscribe(() => {
          this.cargarElementos();
          this.limpiarFormulario();
        });
    }
  }

  elemento = signal<Elemento[]>([]);
  elementosService = inject(ElementoService);
  elementoSelected = signal<Elemento | null>(null);

  cargarElementos() {
    this.elementosService.obtenerElementos().subscribe((elementos) => {
      this.elemento.set(elementos);
      console.log(elementos);
      console.log("Cargados elementos");
    });
  }

  ngOnInit() {
    this.cargarElementos();
  }

  limpiarFormulario() {
    this.elementoSelected.set(null);
    this.formulario.reset();
  }

  cargarElementoEnFormulario(elemento: Elemento) {
    this.elementoSelected.set(elemento);
    this.formulario.setValue({
      elemento: elemento.elemento,
      simbolo: elemento.simbolo,
      peso_atomico: elemento.peso_atomico,
      imagen: elemento.imagen,
    });
  }

  eliminarElemento(id: number) {
    this.elementosService.eliminarElemento(id).subscribe(() => {
      this.cargarElementos();
      this.limpiarFormulario();
    });
  }

  formulario = new FormGroup({
    elemento: new FormControl(''),
    simbolo: new FormControl(''),
    peso_atomico: new FormControl<number | null>(null),
    imagen: new FormControl(''),
  })
}
