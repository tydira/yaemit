// @flow
export type Callback = (input?: mixed) => void
export type CallbackSet = Array<Callback>
export type EventMap = { [string]: CallbackSet }

/**
 * Microscopic and speedy event emitter.
 */
export default class Emitter {
  /**
   * Storage for event callbacks.
   */
  _eventMap: EventMap = {}

  /**
   * Return a an existing or new Set.
   * @param {string} name - name of event
   * @return {Set} existing or new Set
   */
  _event(name: string): CallbackSet {
    return (this._eventMap[name] = this._eventMap[name] || [])
  }

  /**
   * Associate a callback with an event name.
   * @param {string} name - name of event
   * @param {function(input: *)} fn - callback
   * @throws {EmitterError} throw error when fn isn't a function
   */
  on(name: string, fn: Callback) {
    this._event(name).push(fn)
  }

  /**
   * Emit an event with the supplied input.
   * @param {string} name - name of event
   * @param {*} [input] - input given to the callbacks
   */
  emit(name: string, input?: mixed) {
    if (!this._eventMap[name]) return
    this._event(name).forEach((fn: Callback) => fn(input))
  }
}
