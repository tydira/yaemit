# Yaemit
[![CircleCI](https://img.shields.io/circleci/project/github/kroogs/yaemit.svg)](https://circleci.com/gh/kroogs/yaemit)
[![Coverage](https://img.shields.io/coveralls/kroogs/yaemit.svg)](https://coveralls.io/github/kroogs/yaemit)
[![npm version](https://img.shields.io/npm/v/yaemit.svg)](https://www.npmjs.com/package/yaemit)
[![Dependencies](https://img.shields.io/david/kroogs/yaemit.svg)]()
[![Dev Dependencies](https://img.shields.io/david/dev/kroogs/yaemit.svg)]()
[![MIT license](https://img.shields.io/npm/l/yaemit.svg)](https://spdx.org/licenses/MIT)

Microscopic and speedy event emitter in ES2015.

## Installation

  ```shell
  npm install yaemit
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

  Context binding for the event handler:
  ```javascript
  e.on('event', handler.bind(context))
  ```

  Run an event handler once:
  ```javascript
  e.once('event', handler)
  e.emit('event') // Ran event handler
  e.emit('event') // Didn't run anything
  ```

## Test

  ```shell
  npm test
  ```
