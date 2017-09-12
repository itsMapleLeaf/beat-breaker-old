import * as pixi from 'pixi.js'

/** Creates a rectangle pixi Graphics object with the given dimensions */
export function createRectObject(width: number, height: number, color = 0xffffff) {
  const sprite = new pixi.Graphics()
  sprite.beginFill(color)
  sprite.drawRect(0, 0, width, height)
  sprite.endFill()
  return sprite
}
