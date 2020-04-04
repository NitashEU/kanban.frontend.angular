import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NiRouterService } from './services/ni-router.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [],
  exports: [],
  providers: [NiRouterService]
})
export class SharedModule {}
