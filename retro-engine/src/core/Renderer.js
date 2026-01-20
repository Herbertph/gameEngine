export class Renderer {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.ctx.imageSmoothingEnabled = false;
  }

  clear() {
    this.ctx.clearRect(0, 0, 160, 144);
  }

  getContext() {
    return this.ctx;
  }
}
