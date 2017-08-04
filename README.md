# yaemit

[![TravisCI](https://img.shields.io/circleci/project/github/kroogs/yaemit.svg)](https://circleci.com/gh/kroogs/yaemit)
[![Coverage](https://img.shields.io/coveralls/kroogs/yaemit.svg)](https://coveralls.io/github/kroogs/yaemit)
[![Dependencies](https://img.shields.io/david/kroogs/yaemit.svg)](https://david-dm.org/kroogs/yaemit)
[![Dev Dependencies](https://img.shields.io/david/dev/kroogs/yaemit.svg)](https://david-dm.org/kroogs/yaemit?type=dev)
[![npm version](https://img.shields.io/npm/v/yaemit.svg)](https://www.npmjs.com/package/yaemit)
[![MIT license](https://img.shields.io/npm/l/yaemit.svg)](https://spdx.org/licenses/MIT)

> Microscopic and speedy event emitter.

## Installation

  ```shell
  npm --save install yaemit
  ```

## Usage

  Direct usage of Emitter:
  ```javascript
  import { Emitter } from 'yaemit'

  const e = new Emitter()
  const fn = (input) => console.log('hello', input)

  e.on('event', fn)
  e.emit('event', 'world')
  ```

  Turn off an event handler
  ```javascript
  e.off('event', fn)
  ```

  Context binding for the event handler:
  ```javascript
  e.on('event', handler.bind(context))
  ```

  Emitter can be extended:
  ```javascript
  class Hello extends Emitter {
    constructor() {
      this.on('event', this.hello)
    }

    hello(input) {
      console.log('hello', input)
    }
  }

  (new Hello()).emit('event', 'world')
  ```

## Mixins

  Run an event handler once:
  ```javascript
  import { mixins } from 'yaemit'

  const OEmitter = mixins.once(Emitter)
  const o = new OEmitter()

  o.once('event', handler)
  o.emit('event') // Ran event handler
  o.emit('event') // Didn't run anything
  ```

  Enable chaining:
  ```javascript
  const CEmitter = mixins.chain(Emitter)
  const c = new CEmitter()

  c.emit('one').emit('two').emit('three')
  ```

  Emit events when .on and .off are used:
  ```javascript
  const NEmitter = mixins.notify(Emitter)
  const n = new NEmitter()

  n.on('off', () => console.log('off'))
  n.off('off') // Runs console.log('off')
  ```

  Combine mixins:
  ```javascript
  const SEmitter = mixins.once(mixins.chain(Emitter))
  const spiffy = new SEmitter()

  spiffy
    .emit('spaghetti') // Didn't run anything
    .once('spaghetti', handler)
    .emit('spaghetti') // Ran event handler
    .emit('spaghetti') // Didn't run anything
  ```
