import { IList } from './list.interface';

export interface IBoard {
  id: number;
  name: string;
  image: string;
  lists: IList[];
}
