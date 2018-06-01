/* @flow */

module.exports = <R, E>(promise: Promise<R>): Promise<[R | null, E | void]> =>
  new Promise(resolve =>
    promise.then(
      (result: R) => resolve([result, undefined]),
      (err: E) => resolve([null, err]),
    ));
