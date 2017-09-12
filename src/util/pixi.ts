import * as pixi from 'pixi.js'

/** Draw a rectangle to a pixi Graphics object with the given dimensions */
export function drawRect(sprite: pixi.Graphics, width: number, height: number, color = 0xffffff) {
  sprite.beginFill(color)
  sprite.drawRect(0, 0, width, height)
  sprite.endFill()
}
