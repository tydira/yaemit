# yaemit

[![TravisCI](https://img.shields.io/circleci/project/github/kroogs/yaemit.svg)](https://circleci.com/gh/kroogs/yaemit)
[![Coverage](https://img.shields.io/coveralls/kroogs/yaemit.svg)](https://coveralls.io/github/kroogs/yaemit)
[![Dependencies](https://img.shields.io/david/kroogs/yaemit.svg)](https://david-dm.org/kroogs/yaemit)
[![Dev Dependencies](https://img.shields.io/david/dev/kroogs/yaemit.svg)](https://david-dm.org/kroogs/yaemit?type=dev)
[![npm version](https://img.shields.io/npm/v/yaemit.svg)](https://www.npmjs.com/package/yaemit)
[![MIT license](https://img.shields.io/npm/l/yaemit.svg)](https://spdx.org/licenses/MIT)

## Install

  ```shell
  npm --save install yaemit
  ```

## Example

  Direct usage of Emitter:
  ```javascript
  import Emitter from 'yaemit'

  const e = new Emitter()
  const fn = (input) => console.log('hello', input)

  e.on('event', fn)
  e.emit('event', 'world')
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

  ## That's it.

  Need more? Be sure to check out [yaemit-fancy](https://github.com/kroogs/yaemit-fancy)
  if you want features that were too niche to include here
  or if you just want to see how to extend yaemit yourself.
