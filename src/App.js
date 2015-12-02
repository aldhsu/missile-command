import React, { Component } from 'react';
import Main from './game/main';


export class App extends Component {
  constructor() {
    super();
    this.width = 800;
    this.height = 480;
    this.maxParticles = 20;
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.canvas = this.refs.canvas

    const ctx = this.canvas.getContext('2d');
    this.main = new Main(ctx, this.width, this.height, this.maxParticles);
    this.main.init();
  }

  getMousePos(canvas, evt) {
    const rect = canvas.getBoundingClientRect();

    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

  handleClick(event) {
    const coords = this.getMousePos(this.canvas, event);

    this.main.addSprite(coords);
  }

  render() {
    return (
        <canvas onClick={this.handleClick} width={this.width} height={this.height} ref='canvas'/>
    );
  }
}
