import { Player } from "../entities/Player.js";

export class OverworldState {
  constructor(engine) {
    this.player = new Player(5, 5, engine.input);
  }

  update(delta) {
    this.player.update(delta);
  }

  render(ctx) {
    ctx.fillStyle = "#9bbc0f";
    ctx.fillRect(0, 0, 160, 144);

    this.drawGrid(ctx);
    this.player.render(ctx);
  }

  drawGrid(ctx) {
    ctx.strokeStyle = "rgba(0,0,0,0.1)";

    for (let x = 0; x <= 160; x += 16) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 144);
      ctx.stroke();
    }

    for (let y = 0; y <= 144; y += 16) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(160, y);
      ctx.stroke();
    }
  }
}
