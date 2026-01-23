export class Interactable {
  constructor(x, y, solid = false) {
    this.x = x;
    this.y = y;
    this.solid = solid;
  }

  interact(engine) {}
}
