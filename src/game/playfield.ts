import * as pixi from 'pixi.js'
import { createRect } from '../util/pixi'
import { Black, White } from './colors'

class PlayfieldEdge {
  container = new pixi.Container()
  private width = 25
  private glow = createRect(this.width, this.height, White.rgbNumber())
  private inner = createRect(this.width - 10, this.height, White.rgbNumber())

  constructor(private height: number, x: number) {
    this.glow.position.x = -x
    this.glow.alpha = 0.5
    this.inner.position.copy(this.glow.position)
    this.container.addChild(this.glow, this.inner)
  }

  update(dt: number) {}
}

export class Playfield {
  container = new pixi.Container()

  private background = createRect(this.width, this.height, Black.darken(0.8).rgbNumber(), 0.5)
  private edgeLeft = new PlayfieldEdge(this.height, -this.background.width / 2)
  private edgeRight = new PlayfieldEdge(this.height, this.background.width / 2)

  constructor(private width: number, private height: number) {
    this.container.addChild(this.background, this.edgeLeft.container, this.edgeRight.container)
  }
}
