// @flow
export type Callback = (input?: mixed) => void
export type EventMap = { [string]: Callback[] }

/**
 * Microscopic event emitter.
 */
export default class Base {
  /**
   * Storage for event callbacks.
   */
  _eventMap: EventMap = {}

  /**
   * Return an existing or new array by event name.
   */
  _getEvent(name: string): Callback[] {
    return (this._eventMap[name] = this._eventMap[name] || [])
  }

  /**
   * Associate a callback with an event name.
   */
  on(name: string, fn: Callback) {
    this._getEvent(name).push(fn)
  }

  /**
   * Emit an event with the supplied input.
   */
  emit(name: string, input?: mixed) {
    if (!this._eventMap[name]) return
    this._getEvent(name).forEach((fn: Callback) => fn(input))
  }
}
