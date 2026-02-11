export class DialogueState {
  constructor(engine, message, previousState) {
    this.engine = engine;
    this.message = message;
    this.previousState = previousState;
  }

  update() {
    // Só escuta confirmação
    if (
      this.engine.input.wasPressed("e") ||
      this.engine.input.wasPressed("Enter")
    ) {
      this.engine.stateMachine.change(this.previousState);
    }
  }

  render(ctx) {
    // Desenha o estado anterior (overworld congelado)
    this.previousState.render(ctx);

    // Caixa de diálogo
    const boxHeight = 48;
    const padding = 8;

    ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
    ctx.fillRect(0, 144 - boxHeight, 160, boxHeight);

    ctx.strokeStyle = "#ffffff";
    ctx.strokeRect(0, 144 - boxHeight, 160, boxHeight);

    // Texto
    ctx.fillStyle = "#ffffff";
    ctx.font = "10px monospace";
    ctx.textBaseline = "top";

    this.wrapText(
      ctx,
      this.message,
      padding,
      144 - boxHeight + padding,
      160 - padding * 2,
      12
    );
  }

  wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = text.split(" ");
    let line = "";

    for (let i = 0; i < words.length; i++) {
      const testLine = line + words[i] + " ";
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && i > 0) {
        ctx.fillText(line, x, y);
        line = words[i] + " ";
        y += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, x, y);
  }
}
