import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class NiRouterService {
  public constructor(private router: Router) {}

  public toHome(): Promise<boolean> {
    return this.router.navigate(['home']);
  }
}
