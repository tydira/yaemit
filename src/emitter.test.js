import Emitter from './emitter'

describe('Emitter', function() {
  beforeEach(() => {
    this.emitter = new Emitter()
  })

  describe('#on', () => {
    it('registers a callback for an event', () => {
      function fn() {}
      this.emitter.on('event', fn)
      expect(this.emitter._eventMap.event.values().next().value).toBe(fn)
    })

    it('throws an TypeError if called without a function', () => {
      expect(() => this.emitter.on('event')).toThrowError(TypeError)
      expect(() => {
        this.emitter.on('event', 100)
      }).toThrowError('requires callback')
    })
  })

  describe('#off', () => {
    it('unregisters a callback for an event', () => {
      function fn() {}

      this.emitter.on('event', fn)
      this.emitter.off('event', fn)

      expect(this.emitter._eventMap.event.size).toBe(0)
    })

    it('unregisters all callbacks for an event', () => {
      function fn() {}
      function fn2() {}

      this.emitter.on('event', fn)
      this.emitter.on('event', fn2)
      this.emitter.off('event')

      expect(this.emitter._eventMap.event.size).toBe(0)
    })

    it('returns quickly if unable to find event', () => {
      this.emitter.off('event')
      expect(this.emitter._eventMap.event).toBe(undefined)
    })
  })

  describe('#emit', () => {
    it('runs all callbacks for an event with the supplied argument', () => {
      const data = []
      const fn = input => data.push(input)
      const fn2 = input => data.push(input)

      this.emitter.on('event', fn)
      this.emitter.on('event', fn2)
      this.emitter.emit('event', 'ran')

      expect(data).toEqual(['ran', 'ran'])
    })

    it('returns quickly if unable to find event', () => {
      this.emitter.emit('event')
      expect(this.emitter._eventMap.event).toBe(undefined)
    })
  })
})
