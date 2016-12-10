import { expect } from 'chai';
import Emitter from './emitter';

describe('Emitter', function () {
  beforeEach(function () {
    this.emitter = new Emitter();
  });

  it('#on should register a callback for an event', function () {
    function fn() {}

    this.emitter.on('event', fn);

    expect(this.emitter._events.event.size).to.equal(1);
  });

  it('#off should unregister a callback for an event', function () {
    function fn() {}

    this.emitter.on('event', fn);
    this.emitter.off('event', fn);

    expect(this.emitter._events.event.size).to.equal(0);
  });

  it('#off should unregister all callbacks for an event', function () {
    function fn() {}
    function fn2() {}

    this.emitter.on('event', fn);
    this.emitter.on('event', fn2);
    this.emitter.off('event');

    expect(this.emitter._events.event.size).to.equal(0);
  });

  it('#emit should run all callbacks for an event with supplied argument', function () {
    const data = [];

    function fn(input) { data.push(input); }
    function fn2(input) { data.push(input); }

    this.emitter.on('event', fn);
    this.emitter.on('event', fn2);
    this.emitter.emit('event', 'ran');

    expect(data).to.deep.equal(['ran', 'ran']);
  });
});
