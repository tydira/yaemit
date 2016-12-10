# Yaemit [![CircleCI](https://circleci.com/gh/kroogs/yaemit.svg?style=shield)](https://circleci.com/gh/kroogs/yaemit)

Microscopic (400 bytes) and speedy event emitter in ES2015.

## Installation

  ```shell
  npm install yaemit
  ```

## Usage

  Direct usage of Emitter:
  ```javascript
  import Emitter from 'yaemit';

  const e = new Emitter();
  function fn(input) { console.log('hello', input); }

  e.on('event', fn);
  e.emit('event', 'world');
  e.off('event', fn);
  ```

  Emitter can be extended:
  ```javascript
  class Hello extends Emitter {
    constructor() {
      super();

      this.on('event', this.hello);
      this.emit('event', 'world');
    }

    hello(input) {
      console.log('hello', input);
    }
  }
  ```

  Context binding for the callback:
  ```javascript
  emitter.on('event', callback.bind(variable));
  ```

  Run and unregister a callback:
  ```javascript
  emitter.on('event', function() {
    console.log('called');

    emitter.off('event', this);
  });
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
