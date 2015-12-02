import Sprite from './sprite';
import _ from 'underscore';

export default class Missile extends Sprite {
  constructor() {
    super();
    this.x = _.random(width);
    this.y = 0;
    // Maybe use a focal lens to aim at the domes with some inaccuracy
    this.xVel = Math.random();
    this.yVel = Math.random();
  }
}
