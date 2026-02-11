import { Player } from "../entities/Player.js";
import { Tilemap } from "../map/Tilemap.js";
import { NPC } from "../interactables/NPC.js";
import { DialogueState } from "./DialogueState.js";


export class OverworldState {
  constructor(engine) {
    this.engine = engine;

    this.map = new Tilemap([
  [1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,1],
  [1,0,1,1,0,1,1,0,0,1],
  [1,0,0,0,0,0,0,0,0,1],
  [1,0,0,1,1,1,0,0,0,1],
  [1,0,0,0,0,0,0,1,0,1],
  [1,0,1,0,1,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1]
]);

this.engine.eventBus.on("dialogue:start", message => {
  this.engine.stateMachine.change(
    new DialogueState(this.engine, message, this)
  );
});

    this.player = new Player(1, 1, engine.input, this.map);

    this.interactables = [
      new NPC(3, 1, "Hello, traveler."),
      new NPC(7, 3, "This village hides secrets.")
    ];

    // 🔑 A LINHA QUE FALTAVA
    this.player.canMove = (x, y) => {
      return !this.map.isBlocked(x, y) &&
             !this.isBlockedByNPC(x, y);
    };
  }

  isBlockedByNPC(x, y) {
    return this.interactables.some(
      obj => obj.solid && obj.x === x && obj.y === y
    );
  }

  update(delta) {
    this.player.update(delta);

    if (this.engine.input.wasPressed("e")) {
      this.tryInteract();
    }
  }

  tryInteract() {
    const { tileX, tileY, facing } = this.player;

    let targetX = tileX;
    let targetY = tileY;

    if (facing === "up") targetY--;
    if (facing === "down") targetY++;
    if (facing === "left") targetX--;
    if (facing === "right") targetX++;

    const target = this.interactables.find(
      obj => obj.x === targetX && obj.y === targetY
    );

    if (target) {
      target.interact(this.engine);
    }
  }

  render(ctx) {
    this.map.render(ctx);

    this.interactables.forEach(obj => {
      ctx.fillStyle = "blue";
      ctx.fillRect(obj.x * 16, obj.y * 16, 16, 16);
    });

    this.player.render(ctx);
  }
}
