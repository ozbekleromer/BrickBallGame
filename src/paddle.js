export default class Paddle {
  constructor(gameWidth, gameHeight) {
    this.width = gameWidth / 6;
    this.height = gameHeight / 18;

    this.maxSpeed = 7;
    this.speed = 0;

    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.position = {
      x: (gameWidth - this.width) / 2,
      y: gameHeight - this.height - 10
    };
  }

  draw(ctx) {
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(deltaTime) {
    if (!deltaTime) return;
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
