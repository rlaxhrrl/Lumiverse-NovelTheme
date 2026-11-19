import type { SpindleFrontendContext } from 'lumiverse-spindle-types'
import { install } from './theme'

export function setup(ctx: SpindleFrontendContext) {
  const remove = install((css) => ctx.dom.addStyle(css))
  return () => remove()
}
