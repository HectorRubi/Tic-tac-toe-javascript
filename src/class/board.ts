import { Box } from './box';

export class Board {
  private boxList: Box[];

  constructor() {
    this.boxList = [];
  }

  public throw(position: number, player: boolean) {}
}
