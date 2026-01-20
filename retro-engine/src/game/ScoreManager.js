export class ScoreManager {
  constructor(eventBus) {
    this.score = 0;
    this.eventBus = eventBus;
  }

  add(points) {
    this.score += points;
    this.eventBus.emit("score:updated", this.score);
  }

  finish() {
    this.eventBus.emit("game:end", {
      score: this.score,
      finishedAt: Date.now()
    });
  }
}
