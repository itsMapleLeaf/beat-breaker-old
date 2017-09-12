import * as pixi from 'pixi.js'

type HasDimensions = {
  width: number
  height: number
}

/** Draw a rectangle to a pixi Graphics object with the given dimensions */
export function drawRect(
  sprite: pixi.Graphics,
  width: number,
  height: number,
  color = 0xffffff,
  alpha = 1,
) {
  sprite.beginFill(color, alpha)
  sprite.drawRect(0, 0, width, height)
  sprite.endFill()
}

/** Set an object's pivot to its center */
export function pivotToCenter(obj: pixi.DisplayObject & HasDimensions) {
  obj.pivot.set(obj.width / 2, obj.height / 2)
}

/** Create a centered rectangle object */
export function createRect(width: number, height: number, color = 0xffffff, alpha = 1) {
  const sprite = new pixi.Graphics()
  drawRect(sprite, width, height, color, alpha)
  pivotToCenter(sprite)
  return sprite
}
