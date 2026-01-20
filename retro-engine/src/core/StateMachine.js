export class StateMachine {
  change(state) {
    this.current = state;
  }

  update(delta) {
    this.current?.update(delta);
  }

  render(ctx) {
    this.current?.render(ctx);
  }
}
