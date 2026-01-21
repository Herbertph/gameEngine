import { Entity } from "./Entity.js";
import { TILE_SIZE } from "../core/constants.js";

export class Player extends Entity {
  constructor(tileX, tileY, input, map) {
  super(tileX * TILE_SIZE, tileY * TILE_SIZE);
  this.tileX = tileX;
  this.tileY = tileY;
  this.input = input;
  this.map = map;
  this.isMoving = false;
  this.moveProgress = 0;
  this.moveSpeed = 80;
  this.direction = null;
}


  update(delta) {
    if (!this.isMoving) {
      this.handleInput();
    } else {
      this.move(delta);
    }
  }

  handleInput() {
    if (this.input.isPressed("ArrowUp")) this.startMove("up");
    else if (this.input.isPressed("ArrowDown")) this.startMove("down");
    else if (this.input.isPressed("ArrowLeft")) this.startMove("left");
    else if (this.input.isPressed("ArrowRight")) this.startMove("right");
  }

  startMove(direction) {
  let targetX = this.tileX;
  let targetY = this.tileY;

  if (direction === "up") targetY--;
  if (direction === "down") targetY++;
  if (direction === "left") targetX--;
  if (direction === "right") targetX++;

  if (this.map.isBlocked(targetX, targetY)) {
    return; // movimento cancelado
  }

  this.direction = direction;
  this.isMoving = true;
  this.moveProgress = 0;

  this.tileX = targetX;
  this.tileY = targetY;
}


  move(delta) {
    this.moveProgress += this.moveSpeed * delta;

    if (this.moveProgress >= TILE_SIZE) {
      this.snapToGrid();
      this.isMoving = false;
      return;
    }

    if (this.direction === "up") this.y -= this.moveSpeed * delta;
    if (this.direction === "down") this.y += this.moveSpeed * delta;
    if (this.direction === "left") this.x -= this.moveSpeed * delta;
    if (this.direction === "right") this.x += this.moveSpeed * delta;
  }

  snapToGrid() {
    this.x = this.tileX * TILE_SIZE;
    this.y = this.tileY * TILE_SIZE;
  }

  render(ctx) {
    ctx.fillStyle = "black";
    ctx.fillRect(this.x, this.y, TILE_SIZE, TILE_SIZE);
  }
}
