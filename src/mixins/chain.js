import Emitter, { Callback } from '../emitter'

export default function chain(superclass: Emitter): Emitter {
  return class extends superclass {
    on(name: string, fn: Callback): Emitter {
      super.on(name, fn)
      return this
    }

    off(name: string, fn?: Callback): Emitter {
      super.off(name, fn)
      return this
    }

    emit(name: string, input?: mixed): Emitter {
      super.emit(name, input)
      return this
    }
  }
}
