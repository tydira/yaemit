import Emitter from '../emitter'
import chain from './chain'

class E extends chain(Emitter) {}

describe('mixins#chain', function() {
  beforeEach(() => {
    this.emitter = new E()
  })

  it('returns an subclass of the argument', () => {
    expect(this.emitter).toBeInstanceOf(Emitter)
  })

  it('#on calls super#on and return this', () => {
    const bucket = []

    this.emitter.on('event', () => bucket.push(true))
    this.emitter.emit('event').emit('event')

    expect(bucket.length).toBe(2)
  })

  it('#off calls super#off and return this', () => {
    let called = false

    this.emitter.on('event', () => (called = true)).off('event').emit('event')

    expect(called).toBe(false)
  })

  it('#emit calls super#emit and return this', () => {
    let called = false

    this.emitter.on('event', () => (called = true)).emit('event').off('event')

    expect(called).toBe(true)
  })
})
