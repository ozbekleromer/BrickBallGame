import Paddle from "/src/paddle";
import InputHandler from "/src/input";
import Ball from "/src/ball";
import Brick from "./brick";

import { buildLevel, level1 } from "/src/levels";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);

    let bricks = buildLevel(this, level1);

    this.gameObject = [this.ball, this.paddle, ...bricks];

    new InputHandler(this.paddle);
  }

  draw(ctx) {
    this.gameObject.forEach((object) => object.draw(ctx));
  }

  update(deltaTime) {
    this.gameObject.forEach((object) => object.update(deltaTime));
  }
}
