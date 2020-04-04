import { BoardRootComponent } from './pages/root/root.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Shell } from '../shell/services/shell.service';

const routes: Routes = [
  Shell.childRoutes([{ path: 'board/:id', component: BoardRootComponent }])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardRoutingModule {}
