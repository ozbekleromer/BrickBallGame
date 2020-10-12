import Paddle from "/src/paddle";
import InputHandler from "/src/input";
import Ball from "/src/ball";
import Brick from "./brick";

import { buildLevel, level1 } from "/src/levels";

const GAMESTATE = {
  PAUSED: 0,
  RUNNING: 1,
  MENU: 2,
  GAMEOVER: 3
};

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.gameState = GAMESTATE.RUNNING;
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);

    let bricks = buildLevel(this, level1);

    this.gameObject = [this.ball, this.paddle, ...bricks];

    new InputHandler(this.paddle, this);
  }

  draw(ctx) {
    this.gameObject.forEach((object) => object.draw(ctx));

    if (this.gameState === GAMESTATE.PAUSED) {
      ctx.rect(0, 0, this.gameWidth, this.gameHeight);
      ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
      ctx.fill();
    }
  }

  update(deltaTime) {
    if (this.gameState === GAMESTATE.PAUSED) return;

    this.gameObject.forEach((object) => object.update(deltaTime));

    this.gameObject = this.gameObject.filter(
      (object) => !object.markedForDeletion
    );
  }

  togglePause() {
    if (this.gameState === GAMESTATE.PAUSED) {
      this.gameState = GAMESTATE.RUNNING;
    } else {
      this.gameState = GAMESTATE.PAUSED;
    }
  }
}
