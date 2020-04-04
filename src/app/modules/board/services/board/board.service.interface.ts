import { IBoard } from '../../interfaces/board.interface';

export abstract class IBoardService {
  public abstract get(): Promise<IBoard[]>;
  public abstract get(id: number): Promise<IBoard>;
}
