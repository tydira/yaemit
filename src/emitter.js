export default class EmitterSet {
  constructor() {
    this._events = {};
  }

  _event(name) {
    return (this._events[name] = this._events[name] || new Set());
  }

  on(name, fn) {
    this._event(name).add(fn);
  }

  off(name, fn) {
    fn ? this._event(name).delete(fn) : this._event(name).clear();
  }

  emit(name, input) {
    this._event(name).forEach(function(fn) { fn(input); });
  }
}
