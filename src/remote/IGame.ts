import {IGameUser} from './IGameUser';
import {IGameVote} from './IGameVote';

export interface IGame {
  id: number;
  users: IGameUser[];
  activeUser: string;
  vote?: IGameVote;
  board: string[][];
}
