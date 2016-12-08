# Yaemit

Microscopic and speedy event emitter for ES2015.

## Installation

  ```shell
  npm install yaemit
  ```

## Usage

  ```javascript
  import Emitter from 'yaemit';

  class MyClass extends Emitter {}

  const e = new MyClass();
  function fn(input) { console.log('hello', input); }

  e.on('hello', fn);
  e.emit('hello', 'world');
  e.off('hello', fn);
  ```

## Test

  ```shell
  npm test
  ```
