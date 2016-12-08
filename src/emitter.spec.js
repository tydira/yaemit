import { expect } from 'chai';
import Emitter from '../src/emitter';

describe('Emitter', () => {
  beforeEach(function () {
    this.emitter = new Emitter();
  });

  it('#on should register a callback for an event', function () {
    function func() {}

    this.emitter.on('event', func);

    expect(this.emitter._events.event.get(func)).to.equal(true);
  });

  it('#off should unregister a callback for an event', function () {
    function func() {}

    this.emitter.on('event', func);
    this.emitter.off('event', func);

    expect(this.emitter._events.event.size).to.equal(0);
  });

  it('#emit should run all callbacks for an event with supplied argument', function () {
    const data = [];

    function func(input) { data.push(input); }
    function func2(input) { data.push(input); }

    this.emitter.on('event', func);
    this.emitter.on('event', func2);
    this.emitter.emit('event', 'ran');

    expect(data).to.deep.equal(['ran', 'ran']);
  });
});
