import { detectCollision } from "/src/collisionDetection";

export default class Ball {
  constructor(game) {
    this.image = document.getElementById("img_ball");

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.game = game;

    this.size = this.gameWidth / 35;
    this.reset();
  }

  reset() {
    this.position = { x: 10, y: 200 };
    this.speed = { x: 2, y: -1 };
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    //wall on left or right
    if (this.position.x < 0 || this.position.x > this.gameWidth - this.size) {
      this.speed.x = -this.speed.x;
    }

    //wall on top
    if (this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }

    //wall on bottom
    if (this.position.y > this.gameHeight - this.size) {
      this.game.lives--;
      document.getElementById("lives").innerHTML = "Lives: " + this.game.lives;
      this.reset();
    }

    //check colision with left or right side of paddle
    if (detectCollision(this, this.game.paddle)) {
      this.speed.y = -this.speed.y;
    }
  }
}
