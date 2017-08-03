import Emitter, { Callback } from '../emitter'

export default function once(superclass: Emitter): Emitter {
  return class extends superclass {
    /**
     * Associate a callback that will run once with an event name.
     * @param {string} name - name of event
     * @param {function(input: *)} fn - callback
     */
    once(name: string, fn: Callback): void {
      const self = this
      return this.on(name, function(input) {
        self.off(name, this)
        fn(input)
      })
    }
  }
}
