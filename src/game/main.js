import Missile from './models/missile';
import _ from 'underscore';

export default class Main {
  constructor(ctx, width, height, maxParticles) {
    this.ctx = ctx;
    this.sprites = [];
    this.width = width;
    this.height = height;
    this.maxParticles = maxParticles;

    for(let i = 0; i < maxParticles; i++) {
      this.sprites.push(new Missile(width), {endX: width, endY: height});
    }
  }

  init() {
    this.draw();
  }

  draw() {
    this.sprites.forEach((sprite) => {
      this.ctx.fillStyle = 'blue';
      this.ctx.fillRect(sprite.x, sprite.y, 10, 10);
      sprite.update();
    });
    window.requestAnimationFrame(this.draw.bind(this));
  }

  addSprite({x, y}) {
    this.sprites.push(new Sprite(x, y, Math.random(), Math.random()))
  }
}
