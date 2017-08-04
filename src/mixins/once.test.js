import Emitter from '../emitter'
import once from './once'

describe('mixins#once', function() {
  beforeEach(() => {
    this.emitter = new (once(Emitter))()
  })

  it('returns an subclass of the argument', () => {
    expect(this.emitter).toBeInstanceOf(Emitter)
  })

  it('#once registers a callback once for an event', () => {
    const bucket = []
    function fn() {
      bucket.push('ran')
    }

    this.emitter.once('event', fn)
    this.emitter.emit('event')
    this.emitter.emit('event')

    expect(this.emitter._eventMap.event.size).toBe(0)
    expect(bucket).toEqual(['ran'])
  })
})
