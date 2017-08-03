import Emitter, { Callback } from '../emitter'

export default function notify(superclass: Emitter): Emitter {
  return class extends superclass {
    on(name: string, fn: Callback) {
      super.on(name, fn)
      super.emit('on', { name, fn })
    }

    off(name: string, fn?: Callback) {
      super.off(name, fn)
      super.emit('off', { name, fn })
    }
  }
}
