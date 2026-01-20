import { Player } from "../entities/Player.js";

export class OverworldState {
  constructor(engine) {
    this.player = new Player(40, 40, engine.input);
  }

  update(delta) {
    this.player.update(delta);
  }

  render(ctx) {
    ctx.fillStyle = "#9bbc0f";
    ctx.fillRect(0, 0, 160, 144);
    this.player.render(ctx);
  }
}
