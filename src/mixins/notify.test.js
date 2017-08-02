import Emitter from '../emitter'
import notify from './notify'

describe('notify', function() {
  beforeEach(() => {
    this.emitter = new (notify(Emitter))()
  })

  it('should return a new constructor wrapping the argument', () => {
    expect(this.emitter).toBeInstanceOf(Emitter)
  })

  describe('anonymous subclass', () => {
    it('#on should call super.on() and emit an "on" event', () => {
      let called = false

      this.emitter.on('on', () => (called = true))
      this.emitter.on('event', () => {})

      expect(called).toBe(true)
    })

    it('#off should call super.off() and emit an "off" event', () => {
      let called = false

      this.emitter.on('off', () => (called = true))
      this.emitter.on('event', () => {})
      this.emitter.off('event')

      expect(called).toBe(true)
    })
  })
})
