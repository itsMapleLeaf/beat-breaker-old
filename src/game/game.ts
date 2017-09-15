import * as pixi from 'pixi.js'
import { Black } from './colors'
import { viewWidth, viewHeight } from './constants'
import { query } from '../util/dom'

// type InteractionEvent = pixi.interaction.InteractionEvent

export class Game {
  private view = query('#view') as HTMLCanvasElement

  private app = new pixi.Application({
    width: viewWidth,
    height: viewHeight,
    view: this.view,
    transparent: true,
  })

  // private interaction = new pixi.interaction.InteractionManager(this.app.renderer)

  private state = new GameState()

  constructor() {
    this.app.view.style.backgroundColor = Black.darken(0.25)
      .rgb()
      .string()

    this.app.ticker.add(dt => {
      this.state.update(dt / 60)
    })
  }

  setState(state: GameState) {
    this.state.leave()
    this.app.stage.removeChildren()
    this.state = state
    this.state.enter(this.app.stage)
  }
}

export class GameState {
  enter(stage: pixi.Container) {}
  leave() {}
  update(dt: number) {}
}
