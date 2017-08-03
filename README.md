# Yaemit

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
  import Emitter from 'yaemit'

  const e = new Emitter()
  function fn(input) { console.log('hello', input) }

  e.on('event', fn)
  e.emit('event', 'world') // Outputs 'hello world'
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
      super()
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
  import { once } from 'yaemit/mixins'

  const o = new (once(Emitter))()

  o.once('event', handler)
  o.emit('event') // Ran event handler
  o.emit('event') // Didn't run anything
  ```

  Enable chaining by always returning this:
  ```javascript
  import { chain } from 'yaemit/mixins'

  const c = new (chain(Emitter))()

  c.emit('one').emit('two').emit('three')
  ```

  Get events when .on and .off are used:
  ```javascript
  import { notify } from 'yaemit/mixins'

  const n = new (chain(Emitter))()

  n.on('off', (input) => console.log('off', input))
  n.off('off')
  ```
