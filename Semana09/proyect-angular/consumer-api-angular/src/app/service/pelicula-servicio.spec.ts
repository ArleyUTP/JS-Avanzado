import { TestBed } from '@angular/core/testing';

import { PeliculaServicio } from './pelicula-servicio';

describe('PeliculaServicio', () => {
  let service: PeliculaServicio;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeliculaServicio);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
