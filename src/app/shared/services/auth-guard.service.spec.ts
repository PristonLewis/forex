import { TestBed } from '@angular/core/testing';

import { AuthGuardService } from './auth-guard.service';
import { RouterModule } from '@angular/router';

describe('AuthGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({providers: [RouterModule]}));

  xit('should be created', () => {
    const service: AuthGuardService = TestBed.get(AuthGuardService);
    expect(service).toBeTruthy();
  });
});
