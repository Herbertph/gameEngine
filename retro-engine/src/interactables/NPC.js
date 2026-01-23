import { Interactable } from "./Interactable.js";

export class NPC extends Interactable {
  constructor(x, y, message) {
    super(x, y, true); 
    this.message = message;
  }

  interact(engine) {
    console.log("NPC says:", this.message);
    engine.eventBus.emit("dialogue:start", this.message);
  }
}
