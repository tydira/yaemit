// @flow
export type Callback = (input?: mixed) => void
export type CallbackList = Callback[]
export type EventMap = { [string]: CallbackList }

/**
 * Microscopic event emitter.
 */
export default class Emitter {
  /**
   * Storage for event callbacks.
   */
  _eventMap: EventMap = {}

  /**
   * Return an existing or new array by event name.
   * @param {string}
   * @return {array}
   */
  _event(name: string): CallbackList {
    return (this._eventMap[name] = this._eventMap[name] || [])
  }

  /**
   * Associate a callback with an event name.
   * @param {string}
   * @param {function(input: *)}
   */
  on(name: string, fn: Callback) {
    this._event(name).push(fn)
  }

  /**
   * Emit an event with the supplied input.
   * @param {string}
   * @param {*} [input]
   */
  emit(name: string, input?: mixed) {
    if (!this._eventMap[name]) return
    this._event(name).forEach((fn: Callback) => fn(input))
  }
}
