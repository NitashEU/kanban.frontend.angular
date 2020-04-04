import { AuthenticationGuard } from '../../authentication/guards/authentication.guard';
import { Route, Routes } from '@angular/router';
import { ShellRootComponent } from '../pages/root/root.page';

export class Shell {
  public static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: ShellRootComponent,
      children: routes,
      canActivate: [AuthenticationGuard],
      data: { reuse: true }
    };
  }
}
