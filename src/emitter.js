import { EmitterError } from './error'

export default class Emitter {
  constructor() {
    this._events = {}
  }

  _event(name) {
    return (this._events[name] = this._events[name] || new Set())
  }

  on(name, fn) {
    if (typeof fn !== 'function') throw new EmitterError('requires function')
    this._event(name).add(fn)
  }

  off(name, fn) {
    if (!this._events[name]) return
    if (fn) this._event(name).delete(fn)
    else this._event(name).clear()
  }

  once(name, fn) {
    const self = this
    this.on(name, function(input) {
      self.off(name, this)
      fn(input)
    })
  }

  emit(name, input) {
    if (!this._events[name]) return
    this._event(name).forEach(fn => fn(input))
  }
}
