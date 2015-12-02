export default class Sprite {
  constructor(x, y, xVel, yVel, {endX, endY}) {
    this.x = x;
    this.y = y;
    this.xVel = xVel;
    this.yVel = yVel;
    this.endX = endX;
    this.endY = endY;
  }

  update() {
    this.x += this.xVel;
    this.y += this.yVel;
    this.checkCollisions();
  }

  checkCollisions() {
    return this.x > this.endX || this.y > this.endY
  }
}
