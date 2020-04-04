import { IBoard } from '../../interfaces/board.interface';
import { IBoardService } from './board.service.interface';

export class BoardMockService implements IBoardService {
  private mock = [
    {
      id: 1,
      name: 'Board 1',
      image:
        'https://images.unsplash.com/photo-1585975265099-5d5878f6c2c8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=david-clode-IHdGUmpPiJI-unsplash.jpg',
      lists: [
        {
          id: 1,
          title: 'List 1',
          tasks: []
        },
        {
          id: 2,
          title: 'List 2',
          tasks: []
        },
        {
          id: 3,
          title: 'List 3',
          tasks: []
        }
      ]
    }
  ];

  public get(): Promise<IBoard[]>;
  public get(id: number): Promise<IBoard>;
  public async get(id?: number): Promise<IBoard | IBoard[]> {
    return id ? this.mock.find(b => b.id === id) : this.mock;
  }
}
