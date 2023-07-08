import { Board } from './board';
import { Player } from './player';
import { Turn } from './turn';

export class Game {
  private board: Board;
  private playerList: Player[];
  private turn: Turn;

  constructor() {
    this.board = new Board();
    this.playerList = [];
    this.turn = new Turn;
  }
  
  public choseInitialPlayer() {}
  public play() {}
  public reset() {}
}
