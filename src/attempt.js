export function test(done, func) {
  try {
    func();
    done();
  } catch (err) {
    done(err);
  }
}
