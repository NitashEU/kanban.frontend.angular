import { ActivatedRoute, Params } from '@angular/router';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IBoard } from '../../interfaces/board.interface';
import { IBoardService } from '../../services/board/board.service.interface';
import { IList } from '../../interfaces/list.interface';
import { NiRouterService } from '@app/modules/@shared/services/ni-router.service';
import { untilDestroyed } from '@app/modules/@core/pipes/until-destroyed.pipe';

@Component({
  selector: 'app-boards-root',
  templateUrl: './root.page.html',
  styleUrls: ['./root.page.scss']
})
export class BoardRootComponent implements OnInit, OnDestroy {
  public style: any = {};

  public board: IBoard;

  private id: number;

  public constructor(
    private route: ActivatedRoute,
    private niRouter: NiRouterService,
    private boardService: IBoardService
  ) {}

  public ngOnInit(): void {
    this.route.params
      .pipe(untilDestroyed(this))
      .subscribe(p => this.initRoute(p));
  }

  public ngOnDestroy(): void {}

  public drop(event: CdkDragDrop<IList>) {
    moveItemInArray(this.board.lists, event.previousIndex, event.currentIndex);
  }

  private initRoute(p: Params): void {
    if (!p) {
      this.niRouter.toHome();
    }
    const id = p.id;
    if (!id) {
      this.niRouter.toHome();
    }
    this.id = parseInt(id, 10);

    this.initBoard();
  }

  private async initBoard(): Promise<void> {
    this.board = await this.boardService.get(this.id);
    console.log(this.board);
    this.initStyle();
  }

  private initStyle(): void {
    this.style = {
      'background-image': `url(${this.board.image})`
    };
  }
}
