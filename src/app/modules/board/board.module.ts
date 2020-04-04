import { BoardListComponent } from './components/list/list.component';
import { BoardMockService } from './services/board/board.service.mock';
import { BoardRootComponent } from './pages/root/root.page';
import { BoardRoutingModule } from './board-routing.module';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IBoardService } from './services/board/board.service.interface';
import { NgModule } from '@angular/core';
import { SharedModule } from '../@shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FlexLayoutModule,
    DragDropModule,
    BoardRoutingModule
  ],
  declarations: [
    // Pages
    BoardRootComponent,

    // Components
    BoardListComponent
  ],
  exports: [],
  providers: [
    {
      provide: IBoardService,
      useClass: BoardMockService
    }
  ]
})
export class BoardModule {}
