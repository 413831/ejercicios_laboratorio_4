import { TestBed } from '@angular/core/testing';

import { PeliculasRESTService } from './peliculas-rest.service';

describe('PeliculasRESTService', () => {
  let service: PeliculasRESTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeliculasRESTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
