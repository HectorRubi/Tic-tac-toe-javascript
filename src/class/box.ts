export class Box {
  private reference: HTMLInputElement;

  constructor(selector: string) {
    this.reference = document.querySelector(selector) as HTMLInputElement;
  }

  public mark(content: string) {}
}
