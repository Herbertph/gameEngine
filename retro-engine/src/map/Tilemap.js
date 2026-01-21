import { TILE_SIZE } from "../core/constants.js";

export class Tilemap {
  constructor(grid) {
    this.grid = grid;
    this.height = grid.length;
    this.width = grid[0].length;
  }

  isBlocked(x, y) {
    if (x < 0 || y < 0 || x >= this.width || y >= this.height) {
      return true; // fora do mapa é parede
    }

    return this.grid[y][x] === 1;
  }

  render(ctx) {
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        ctx.fillStyle = this.grid[y][x] === 1 ? "#306230" : "#9bbc0f";
        ctx.fillRect(
          x * TILE_SIZE,
          y * TILE_SIZE,
          TILE_SIZE,
          TILE_SIZE
        );
      }
    }
  }
}
