import * as pixi from 'pixi.js'
import { Starfield } from './starfield'
import { Black } from './colors'

type InteractionEvent = pixi.interaction.InteractionEvent

export class Game {
  view = document.querySelector('#view') as HTMLCanvasElement
  app = new pixi.Application({ width: 720, height: 1280, view: this.view, transparent: true })
  interaction = new pixi.interaction.InteractionManager(this.app.renderer)

  starfield = new Starfield(this.app.view.width, this.app.view.height)

  constructor() {
    this.app.view.style.backgroundColor = Black.darken(0.25)
      .rgb()
      .string()

    this.app.stage.addChild(this.starfield.container)
    this.app.ticker.add(dt => this.update(dt / 60))

    this.view.onpointerdown = () => {
      this.view.requestPointerLock()
    }

    this.interaction.on('pointermove', (event: InteractionEvent) => {
      // console.log(event)
    })
  }

  update(dt: number) {
    this.starfield.update(dt)
  }
}
