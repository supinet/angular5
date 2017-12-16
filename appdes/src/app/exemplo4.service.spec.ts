import { TestBed, inject } from '@angular/core/testing';

import { Exemplo4Service } from './exemplo4.service';

describe('Exemplo4Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Exemplo4Service]
    });
  });

  it('should be created', inject([Exemplo4Service], (service: Exemplo4Service) => {
    expect(service).toBeTruthy();
  }));
});
