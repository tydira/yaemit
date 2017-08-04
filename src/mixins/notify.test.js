import Emitter from '../emitter'
import notify from './notify'

describe('mixins#notify', function() {
  beforeEach(() => {
    this.emitter = new (notify(Emitter))()
  })

  it('returns an subclass of the argument', () => {
    expect(this.emitter).toBeInstanceOf(Emitter)
  })

  it('#on calls super.on() and emit an "on" event', () => {
    let called = false

    this.emitter.on('on', () => (called = true))
    this.emitter.on('event', () => {})

    expect(called).toBe(true)
  })

  it('#off calls super.off() and emit an "off" event', () => {
    let called = false

    this.emitter.on('off', () => (called = true))
    this.emitter.on('event', () => {})
    this.emitter.off('event')

    expect(called).toBe(true)
  })
})
