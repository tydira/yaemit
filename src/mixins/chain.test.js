import Emitter from '../emitter'
import chain from './chain'

class E extends chain(Emitter) {}

describe('chain', function() {
  beforeEach(() => {
    this.emitter = new E()
  })

  it('should return a new constructor wrapping the argument', () => {
    expect(this.emitter).toBeInstanceOf(Emitter)
  })

  describe('anonymous subclass', () => {
    it('#on should call super#on and return this', () => {
      const bucket = []

      this.emitter.on('event', () => bucket.push(true))
      this.emitter.emit('event').emit('event')

      expect(bucket.length).toBe(2)
    })

    it('#off should call super#off and return this', () => {
      let called = false

      this.emitter.on('event', () => (called = true)).off('event').emit('event')

      expect(called).toBe(false)
    })

    it('#once should call super#once and return this', () => {
      const bucket = []

      this.emitter
        .once('event', () => bucket.push(true))
        .emit('event')
        .emit('event')

      expect(bucket.length).toBe(1)
    })

    it('#emit should call super#emit and return this', () => {
      let called = false

      this.emitter.on('event', () => (called = true)).emit('event').off('event')

      expect(called).toBe(true)
    })
  })
})
