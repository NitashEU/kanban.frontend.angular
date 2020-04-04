import { ITask } from './task.interface';

export interface IList {
  id: number;
  title: string;
  tasks: ITask[];
}
