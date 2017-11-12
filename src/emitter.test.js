import Emitter from './emitter'

describe('Emitter', function() {
  beforeEach(() => {
    this.emitter = new Emitter()
  })

  describe('#spy', () => {
    it('emits a context then tries to run its action property', () => {
      const out = []

      this.emitter.on('honk', () => out.push('one'))
      this.emitter.spy('honk', { action: () => out.push('two') })

      expect(out).toEqual(['one', 'two'])
    })
  })

  describe('#on', () => {
    it('registers a callback for an event', () => {
      function fn() {}
      this.emitter.on('spork', fn)
      expect(this.emitter._eventMap.spork[0]).toBe(fn)
    })

    it('sets up a #spy', () => {
      let called = false

      this.emitter.on('on', () => (called = true))
      this.emitter.on('whoop', () => {})
      this.emitter.emit('whoop')

      expect(called).toBe(true)
    })
  })

  describe('#off', () => {
    it('calls super#off and emits an "off" event', () => {
      let called = false

      this.emitter.on('off', () => (called = true))
      this.emitter.on('blop', () => {})
      this.emitter.off('blop')

      expect(called).toBe(true)
    })

    it('unregisters a callback for an event', () => {
      function fn() {}

      this.emitter.on('whee', fn)
      this.emitter.off('whee', fn)

      expect(this.emitter._eventMap.whee.length).toBe(0)
    })

    it('returns quickly if unable to find event', () => {
      this.emitter.off('spap')
      expect(this.emitter._eventMap.spap).toBe(undefined)
    })
  })

  describe('#clear', () => {
    it('unregisters all callbacks for an event', () => {
      function fn() {}
      function fn2() {}

      this.emitter.on('bleh', fn)
      this.emitter.on('bleh', fn2)
      this.emitter.clear('bleh')

      expect(this.emitter._eventMap.bleh.length).toBe(0)
    })
  })

  describe('#emit', () => {
    it('#emit calls super#emit', () => {
      let called = false

      this.emitter.on('blap', () => (called = true))
      this.emitter.emit('blap')
      this.emitter.off('blap')

      expect(called).toBe(true)
    })
  })

  describe('#once', () => {
    it('registers a callback once for an event', () => {
      const bucket = []
      function fn() {
        bucket.push('ran')
      }

      this.emitter.once('fledge', fn)
      this.emitter.emit('fledge')
      this.emitter.emit('fledge')

      expect(this.emitter._eventMap.fledge.length).toBe(0)
      expect(bucket).toEqual(['ran'])
    })
  })

  describe('#eventNames', () => {
    it('gets a array of event names', () => {
      this.emitter.on('one', () => {})
      this.emitter.on('two', () => {})
      this.emitter.on('three', () => {})

      expect(this.emitter.eventNames()).toEqual(['one', 'two', 'three'])
    })
  })
})
