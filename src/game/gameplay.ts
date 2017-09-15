import * as pixi from 'pixi.js'
import { viewHeight, viewWidth } from './constants'
import { GameState } from './game'
import { Playfield } from './playfield'
import { Starfield } from './starfield'

const playfieldWidth = 0.825

export class Gameplay extends GameState {
  starfield = new Starfield(viewWidth, viewHeight)
  playfield = new Playfield(viewWidth * playfieldWidth, viewHeight)

  enter(stage: pixi.Container) {
    stage.addChild(this.starfield.container, this.playfield.container)
    this.playfield.container.position.set(viewWidth / 2, viewHeight / 2)
  }

  update(dt: number) {
    this.starfield.update(dt)
  }
}
