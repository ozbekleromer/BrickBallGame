import { detectCollision } from "/src/collisionDetection";

export default class Brick {
  constructor(game, position) {
    this.image = document.getElementById("img_brick");

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.game = game;

    this.position = position;
    this.width = this.gameWidth / 10;
    this.height = this.gameHeight / 25;

    this.markedForDeletion = false;
  }

  update() {
    if (detectCollision(this.game.ball, this)) {
      this.game.ball.speed.y = -this.game.ball.speed.y;

      this.markedForDeletion = true;
    }
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}
