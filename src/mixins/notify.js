import Emitter, { callback } from '../emitter'

export default function notify(superclass: Emitter): Emitter {
  return class extends superclass {
    on(name: string, fn: callback) {
      super.on(name, fn)
      super.emit('on', { name, fn })
    }

    off(name: string, fn?: callback) {
      super.off(name, fn)
      super.emit('off', { name, fn })
    }
  }
}
