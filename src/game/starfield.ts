import * as pixi from 'pixi.js'
import { randomBetween } from '../util/math'

const WHITE = 0xffffff

export class Starfield {
  container = new pixi.Container()
  timer = 0
  timerPeriod = 0.05

  constructor(private viewWidth: number, private viewHeight: number) {}

  update(dt: number) {
    if (dt > 0.5) return

    this.timer += dt

    if (this.timer >= this.timerPeriod) {
      this.timer -= this.timerPeriod

      const star = new pixi.Graphics()
      const size = randomBetween(2, 12)

      star.beginFill(WHITE)
      star.drawRect(0, 0, size, size)
      star.endFill()

      star.x = Math.random() * this.viewWidth
      star.y = -100
      star.pivot.set(5, 5)

      this.container.addChild(star)
    }

    this.container.children.forEach((star: pixi.Graphics) => {
      star.y += star.height * 20 * dt
      if (star.y > this.viewHeight + star.height / 2) {
        star.destroy()
      }
    })
  }
}
