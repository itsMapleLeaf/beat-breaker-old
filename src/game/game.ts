import * as pixi from 'pixi.js'
import { query } from '../util/dom'
import { Black } from './colors'
import { viewHeight, viewWidth } from './constants'

export type InteractionEvent = pixi.interaction.InteractionEvent

export class Game {
  private view = query('#view') as HTMLCanvasElement

  private app = new pixi.Application({
    width: viewWidth,
    height: viewHeight,
    view: this.view,
    transparent: true,
  })

  private interaction = new pixi.interaction.InteractionManager(this.app.renderer)

  private state = new GameState(this)

  constructor() {
    this.app.view.style.backgroundColor = Black.darken(0.25)
      .rgb()
      .string()

    this.app.ticker.add(dt => {
      this.state.update(dt / 60)
    })

    const events = ['pointerdown', 'pointerup', 'pointermove'] as Array<keyof GameState>

    events.forEach(eventName => {
      this.interaction.addListener(eventName, (event: InteractionEvent) => {
        const handler = this.state[eventName] as (event: InteractionEvent) => void
        handler(event)
      })
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
  constructor(protected game: Game) {}
  enter(stage: pixi.Container) {}
  leave() {}
  update(dt: number) {}
  pointerdown(event: InteractionEvent) {}
  pointerup(event: InteractionEvent) {}
  pointermove(event: InteractionEvent) {}
}
