import Emitter from '../emitter'

type callback = (input?: mixed) => void

export default function notify(superclass) {
  return class extends superclass {
    on(name: string, fn: callback): Emitter {
      super.on(name, fn)
      return this
    }

    off(name: string, fn?: callback): Emitter {
      super.off(name, fn)
      return this
    }

    once(name: string, fn: callback): Emitter {
      super.once(name, fn)
      return this
    }

    emit(name: string, input?: mixed): Emitter {
      super.emit(name, input)
      return this
    }
  }
}
