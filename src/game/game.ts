import * as pixi from 'pixi.js'
import { Starfield } from './starfield'
import { Black } from './colors'
import { Playfield } from './playfield'
import { viewWidth, viewHeight } from './constants'

type InteractionEvent = pixi.interaction.InteractionEvent

const playfieldWidth = 0.825

export class Game {
  view = document.querySelector('#view') as HTMLCanvasElement

  app = new pixi.Application({
    width: viewWidth,
    height: viewHeight,
    view: this.view,
    transparent: true,
  })

  interaction = new pixi.interaction.InteractionManager(this.app.renderer)

  starfield = new Starfield(viewWidth, viewHeight)
  playfield = new Playfield(viewWidth * playfieldWidth, viewHeight)

  constructor() {
    this.app.view.style.backgroundColor = Black.darken(0.25)
      .rgb()
      .string()

    this.app.stage.addChild(this.starfield.container)
    this.app.stage.addChild(this.playfield.container)

    this.playfield.container.position.set(this.app.view.width / 2, this.app.view.height / 2)

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
