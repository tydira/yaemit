import Emitter from '../emitter'
import once from './once'

describe('Emitter', function() {
  it('#once should register a callback once for an event', () => {
    const emitter = new (once(Emitter))()
    const bucket = []
    function fn() {
      bucket.push('ran')
    }

    emitter.once('event', fn)
    emitter.emit('event')
    emitter.emit('event')

    expect(emitter._events.event.size).toBe(0)
    expect(bucket).toEqual(['ran'])
  })
})
