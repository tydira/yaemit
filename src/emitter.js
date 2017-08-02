import { EmitterError } from './error'

type callback = (input: mixed) => void

export default class Emitter {
  constructor() {
    this._events = {}
  }

  _event(name: string): Set {
    return (this._events[name] = this._events[name] || new Set())
  }

  on(name: string, fn: callback): void {
    if (typeof fn !== 'function') throw new EmitterError('requires function')
    this._event(name).add(fn)
  }

  off(name: string, fn: callback): void {
    if (!this._events[name]) return
    if (fn) this._event(name).delete(fn)
    else this._event(name).clear()
  }

  once(name: string, fn: callback): void {
    const self = this
    this.on(name, function(input) {
      self.off(name, this)
      fn(input)
    })
  }

  emit(name: string, input: mixed): void {
    if (!this._events[name]) return
    this._event(name).forEach(fn => fn(input))
  }
}
