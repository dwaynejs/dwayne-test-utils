export function deferTest(done, testFunction, interval = 0) {
  setTimeout(() => {
    try {
      testFunction();
      done();
    } catch (err) {
      done(err);
    }
  }, interval);
}
