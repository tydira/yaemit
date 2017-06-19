import Emitter from './emitter'

describe('Emitter', function() {
  beforeEach(() => {
    this.emitter = new Emitter()
  })

  test('#on should register a callback to run for an event', () => {
    function fn() {}

    this.emitter.on('event', fn)

    expect(this.emitter._events.event.size).toBe(1)
  })

  test('#off should unregister a callback to run for an event', () => {
    function fn() {}

    this.emitter.on('event', fn)
    this.emitter.off('event', fn)

    expect(this.emitter._events.event.size).toBe(0)
  })

  test('#off should unregister all callbacks to run for an event', () => {
    function fn() {}
    function fn2() {}

    this.emitter.on('event', fn)
    this.emitter.on('event', fn2)
    this.emitter.off('event')

    expect(this.emitter._events.event.size).toBe(0)
  })

  test('#once should register a callback to run once for an event', () => {
    const bucket = []
    function fn() {
      bucket.push('ran')
    }

    this.emitter.once('event', fn)
    this.emitter.emit('event')
    this.emitter.emit('event')

    expect(this.emitter._events.event.size).toBe(0)
    expect(bucket).toEqual(['ran'])
  })

  test('#emit should run all callbacks to run for an event with supplied argument', () => {
    const data = []

    function fn(input) {
      data.push(input)
    }
    function fn2(input) {
      data.push(input)
    }

    this.emitter.on('event', fn)
    this.emitter.on('event', fn2)
    this.emitter.emit('event', 'ran')

    expect(data).toEqual(['ran', 'ran'])
  })
})
