export default class Paddle {
  constructor(game) {
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.width = this.gameWidth / 6;
    this.height = this.gameHeight / 18;

    this.maxSpeed = 7;
    this.speed = 0;

    this.position = {
      x: (this.gameWidth - this.width) / 2,
      y: this.gameHeight - this.height - 10
    };
  }

  draw(ctx) {
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(deltaTime) {
    //if (!deltaTime) return;
    //this.position.x += 5 / deltaTime;
    this.position.x += this.speed;
    if (this.position.x < 0) this.position.x = 0;
    if (this.position.x + this.width > this.gameWidth)
      this.position.x = this.gameWidth - this.width;
  }

  moveLeft() {
    this.speed = -this.maxSpeed;
  }

  moveRight() {
    this.speed = this.maxSpeed;
  }

  stop() {
    this.speed = 0;
  }
}
