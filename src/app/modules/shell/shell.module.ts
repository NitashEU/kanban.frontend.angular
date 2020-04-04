import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShellRootComponent } from './pages/root/root.page';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ShellRootComponent]
})
export class ShellModule {}
