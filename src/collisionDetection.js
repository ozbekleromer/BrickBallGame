export function detectCollision(ball, gameObject) {
  //check colision with paddle
  let topOfBall = ball.position.y;
  let bottomOfBall = ball.position.y + ball.size;
  let leftSideOfBall = ball.position.x;
  let rightSideOfBall = ball.position.x + ball.size;
  let topOfObject = gameObject.position.y;
  let bottomOfObject = gameObject.position.y + gameObject.height;
  let leftSideOfObject = gameObject.position.x;
  let rightSideOfObject = gameObject.position.x + gameObject.width;

  //check colision with top of paddle
  if (
    bottomOfBall >= topOfObject &&
    topOfBall <= bottomOfObject &&
    leftSideOfBall >= leftSideOfObject &&
    rightSideOfBall <= rightSideOfObject
  ) {
    return true;
  } else {
    return false;
  }

  /*
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
  */
}
