import { Entity } from "./Entity.js";

export class Player extends Entity {
  constructor(x, y, input) {
    super(x, y);
    this.input = input;
    this.speed = 60;
  }

  update(delta) {
    if (this.input.isPressed("ArrowUp")) this.y -= this.speed * delta;
    if (this.input.isPressed("ArrowDown")) this.y += this.speed * delta;
    if (this.input.isPressed("ArrowLeft")) this.x -= this.speed * delta;
    if (this.input.isPressed("ArrowRight")) this.x += this.speed * delta;
  }

  render(ctx) {
    ctx.fillStyle = "black";
    ctx.fillRect(this.x, this.y, 16, 16);
  }
}
