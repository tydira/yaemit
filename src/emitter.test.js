import Emitter from './emitter'

describe('Emitter', function() {
  beforeEach(() => {
    this.emitter = new Emitter()
  })

  describe('#on', () => {
    it('registers a callback for an event', () => {
      function fn() {}
      this.emitter.on('event', fn)
      expect(this.emitter._eventMap.event[0]).toBe(fn)
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
