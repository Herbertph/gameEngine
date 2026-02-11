export class InputManager {
  constructor() {
    this.keys = {};
    this.justPressed = {};

    window.addEventListener("keydown", e => {
      if (!this.keys[e.key]) {
        this.justPressed[e.key] = true;
      }
      this.keys[e.key] = true;
    });

    window.addEventListener("keyup", e => {
      this.keys[e.key] = false;
    });
  }

  isPressed(key) {
    return !!this.keys[key];
  }

  wasPressed(key) {
    const pressed = this.justPressed[key];
    this.justPressed[key] = false;
    return pressed;
  }
}
