import Emitter, { Callback } from '../emitter'

export default function chain(superclass: Emitter): Emitter {
  return class extends superclass {
    on(name: string, fn: Callback): Emitter {
      return super.on(name, fn) || this
    }

    off(name: string, fn?: Callback): Emitter {
      return super.off(name, fn) || this
    }

    emit(name: string, input?: mixed): Emitter {
      return super.emit(name, input) || this
    }
  }
}
