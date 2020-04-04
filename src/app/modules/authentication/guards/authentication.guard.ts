import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot
    } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  public constructor(private router: Router) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // TODO: Check if logged in
    return true;

    this.router.navigate(['login'], {
      queryParams: { redirect: state.url },
      replaceUrl: true
    });

    return false;
  }
}
