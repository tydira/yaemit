import { EmitterError } from '../src/error'

describe('Emitter', function() {
  it('#constructor should call super(message) and set this.name', () => {
    const err = new EmitterError('honk')
    expect(err.message).toBe('honk')
  })

  it('#constructor should set a default error message', () => {
    const err = new EmitterError()
    expect(err.message).toBe('Unknown Error')
  })
})
