import * as index from '.'
import Emitter from './emitter'
import chain from './mixins/chain'
import notify from './mixins/notify'
import once from './mixins/once'

describe('Index', function() {
  it('should export all the appropriate members', () => {
    expect(Emitter).toBe(index.Emitter)
    expect(chain).toBe(index.mixins.chain)
    expect(notify).toBe(index.mixins.notify)
    expect(once).toBe(index.mixins.once)
  })
})
