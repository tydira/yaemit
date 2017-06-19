# Yaemit
[![CircleCI](https://img.shields.io/circleci/project/github/kroogs/yaemit.svg)](https://circleci.com/gh/kroogs/yaemit)
[![Coverage](https://img.shields.io/coveralls/kroogs/yaemit.svg)](https://coveralls.io/github/kroogs/yaemit)
[![npm version](https://img.shields.io/npm/v/yaemit.svg)](https://www.npmjs.com/package/yaemit)
[![Dev Dependencies](https://img.shields.io/david/dev/kroogs/yaemit.svg)]()
[![MIT license](https://img.shields.io/npm/l/yaemit.svg)](https://spdx.org/licenses/MIT)

Microscopic (400 bytes) and speedy event emitter in ES2015.

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
  e.emit('event', 'world')
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

  Context binding for the callback:
  ```javascript
  e.on('event', callback.bind(context))
  ```

  Run a callback once:
  ```javascript
  e.once('event', callback)
  e.emit('event') // Ran callback
  e.emit('event') // Didn't run anything
  ```

## Test

  ```shell
  npm test
  ```

## Rationale

  Other event emitter libraries seemed needlessly bloated and
  complex to me and had a variety of performance issues. In the
  interest of simplicity and speed, I implemented the bare minimum
  of features, took advantage of Set, and chose the language
  constructs that seemed to benchmark better.
