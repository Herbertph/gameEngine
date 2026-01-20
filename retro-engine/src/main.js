import { GameEngine } from "./core/GameEngine.js";

const canvas = document.querySelector("canvas");
const engine = new GameEngine(canvas);

engine.start();
