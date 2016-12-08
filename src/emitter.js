class Emitter {
  constructor() {
    this._events = {};
  }

  _event(name) {
    return (this._events[name] = this._events[name] || new Map());
  }

  on(name, fn) {
    this._event(name).set(fn, true);
  }

  off(name, fn) {
    this._event(name).delete(fn);
  }

  emit(name, input) {
    for (const fn of this._event(name).keys()) fn(input);
  }
}

export default Emitter;
