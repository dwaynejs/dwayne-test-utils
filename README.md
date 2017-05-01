# dwayne-test-utils

Small test plugin for testing Dwayne in node environment (though
it works in browser environment as well).

The module exports `doc`, `html`, `body` and `head` vars (which are
equal to the ones, that Dwayne exports in browser env, and are
generated with a help of [jsdom](https://github.com/tmpvar/jsdom) in
node env).

It exports `initApp` and `deferTest` functions as well.

### API

##### initApp(block)

The module creates a `div` container for a test app. The function
returns a function which, when called once, initializes the app and,
when called twice, removes it. Example:

```js
import { initApp } from 'dwayne-test-utils';
import { strictEqual } from 'assert';
import { Block } from 'dwayne';

class App extends Block {}

describe('some test', () => {
  let remove;

  before(remove = initApp(App));
  after(remove);

  it('should test something', () => {
    // access root block through global.$app
    // access container through global.$container

    strictEqual(a, b);
  });
});
```

##### deferTest(done, testFn, interval)

The function calls `testFn` in `interval` milliseconds inside
`try/catch` block. If the call was successful, `done` is called
without arguments, and if it wasn't it's called with the error
argument. Example:

```js
import { deferTest } from 'dwayne-test-utils';
import { strictEqual } from 'assert';

describe('it should test events', () => {
  it('should handle clicks', (done) => {
    deferTest(done, () => {
      strictEqual(a, b);
    }, 100);

    container
      .find('div')
      .dispatch('click');
  });
});
```
