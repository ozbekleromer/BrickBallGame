export default class Ball {
  constructor(game) {
    this.image = document.getElementById("img_ball");

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.game = game;

    this.position = { x: 10, y: 10 };
    this.speed = { x: 2, y: 2 };
    this.size = this.gameWidth / 35;
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

    document.getElementById("x").innerHTML = this.position.x;
    document.getElementById("y").innerHTML = this.position.y;

    //wall on left or right
    if (this.position.x < 0 || this.position.x > this.gameWidth - this.size) {
      this.speed.x = -this.speed.x;
    }

    //wall on top or bottom
    if (this.position.y < 0 || this.position.y > this.gameHeight - this.size) {
      this.speed.y = -this.speed.y;
    }

    //check colision with paddle
    let topOfBall = this.position.y;
    let bottomOfBall = this.position.y + this.size;
    let leftSideOfBall = this.position.x;
    let rightSideOfBall = this.position.x + this.size;
    let topOfPaddle = this.game.paddle.position.y;
    let bottomOfPaddle = this.game.paddle.position.y + this.game.paddle.height;
    let leftSideOfPaddle = this.game.paddle.position.x;
    let rightSideOfPaddle =
      this.game.paddle.position.x + this.game.paddle.width;

    if (
      //check colision with left or right side of paddle
      bottomOfBall > topOfPaddle &&
      ((leftSideOfBall < leftSideOfPaddle &&
        rightSideOfBall > leftSideOfPaddle) ||
        (leftSideOfBall < rightSideOfPaddle &&
          rightSideOfBall > rightSideOfPaddle))
    ) {
      this.speed.x = -this.speed.x;
    } else if (
      //check colision with top of paddle
      bottomOfBall > topOfPaddle &&
      leftSideOfBall < rightSideOfPaddle &&
      rightSideOfBall > leftSideOfPaddle
    ) {
      this.speed.y = -this.speed.y;
    }
  }
}
