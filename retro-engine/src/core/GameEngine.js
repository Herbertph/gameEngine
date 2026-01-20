import { GameLoop } from "./GameLoop.js";
import { Renderer } from "./Renderer.js";
import { InputManager } from "./InputManager.js";
import { StateMachine } from "./StateMachine.js";
import { EventBus } from "./EventBus.js";
import { ScoreManager } from "../game/ScoreManager.js";
import { OverworldState } from "../states/OverworldState.js";

export class GameEngine {
  constructor(canvas) {
    this.renderer = new Renderer(canvas);
    this.input = new InputManager();
    this.stateMachine = new StateMachine();
    this.eventBus = new EventBus();
    this.scoreManager = new ScoreManager(this.eventBus);

    this.loop = new GameLoop(
      delta => this.update(delta),
      () => this.render()
    );
  }

  start() {
    this.stateMachine.change(new OverworldState(this));
    this.loop.start();
    this.eventBus.emit("game:start");
  }

  update(delta) {
    this.stateMachine.update(delta);
  }

  render() {
    this.renderer.clear();
    this.stateMachine.render(this.renderer.getContext());
  }
}
