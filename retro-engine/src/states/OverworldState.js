import { Player } from "../entities/Player.js";
import { Tilemap } from "../map/Tilemap.js";

export class OverworldState {
  constructor(engine) {
    this.map = new Tilemap([
      [1,1,1,1,1,1,1,1,1,1],
      [1,0,0,0,0,0,0,0,0,1],
      [1,0,1,1,0,1,1,0,0,1],
      [1,0,0,0,0,0,0,0,0,1],
      [1,1,1,1,1,1,1,1,1,1]
    ]);

    this.player = new Player(1, 1, engine.input, this.map);
  }

  update(delta) {
    this.player.update(delta);
  }

  render(ctx) {
    this.map.render(ctx);
    this.player.render(ctx);
  }
}
