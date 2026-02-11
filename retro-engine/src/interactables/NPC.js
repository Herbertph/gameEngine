import { Interactable } from "./Interactable.js";

export class NPC extends Interactable {
  constructor(x, y, message) {
    super(x, y, true);
    this.message = message;
  }

  interact(engine) {
    engine.eventBus.emit("dialogue:start", this.message);
  }
}
