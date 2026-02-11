import { GameEngine } from "./core/GameEngine.js";
import "./style.css"; 

const canvas = document.querySelector("canvas");
const engine = new GameEngine(canvas);

engine.start();
