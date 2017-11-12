import RealBase from './base'
import RealEmitter from './emitter'
import Default, { Base, Emitter } from '.'

describe('index', function() {
  it('exports Base, Emitter, and Emitter as default.', () => {
    expect(RealBase).toBe(Base)
    expect(RealEmitter).toBe(Emitter)
    expect(Default).toBe(Emitter)
  })
})
