function receivesAFunction(callback) {
  return callback();
}
function returnsANamedFunction() {
  let fn = function () {};
  return fn;
}
function returnsAnAnonymousFunction() {
  return function () {};
}
