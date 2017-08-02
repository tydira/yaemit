export class EmitterError extends Error {
  constructor(message = 'Unknown Error') {
    super(message)
    this.name = 'EmitterError'
  }
}
