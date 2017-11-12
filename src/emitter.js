// @flow
import Base from './base'
import type { Callback } from './base'

export type SpyContext = { action: Function }

/**
 * Fancy event emitter.
 */
export default class Emitter extends Base {
  /**
   * Return an array of event names in use.
   */
  eventNames(): string[] {
    return Object.keys(this._eventMap)
  }

  /**
   * Emit an event with context, then call its action.
   */
  spy(name: string, context: SpyContext) {
    super.emit(name, context)
    context.action()
  }

  /**
   * Emit an event with the supplied input.
   */
  emit(name: string, input?: mixed) {
    this.spy('emit', { name, input, action: () => super.emit(name, input) })
  }

  /**
   * Associate a callback with an event name.
   */
  on(name: string, fn: Callback) {
    this.spy('on', { action: () => super.on(name, fn) })
  }

  /**
   * Disassociate a callback from an event name.
   */
  off(name: string, fn: Callback) {
    if (!this._eventMap[name]) return
    this.spy('off', {
      action: () => {
        const event = this._getEvent(name)
        const index = event.indexOf(fn)
        if (index !== -1) event.splice(index, 1)
      },
    })
  }

  /**
   * Disassociate all callbacks from an event name.
   */
  clear(name: string) {
    this.spy('clear', {
      action: () => {
        this._eventMap[name] = []
      },
    })
  }

  /**
   * Associate a single-use callback with an event name.
   */
  once(name: string, fn: Callback) {
    const off = input => {
      this.off(name, off)
      fn(input)
    }

    this.spy('once', { action: () => this.on(name, off) })
  }
}
