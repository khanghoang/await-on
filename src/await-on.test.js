/* @flow */
import to from './try';

describe('Try ', () => {
  it('return result', async () => {
    const [result, error] = await to(Promise.resolve(1));
    expect(result).toEqual(1);
    expect(error).toBeUndefined();
  });
  it('return the final result', async () => {
    const [result, error] = await to(Promise.resolve(1).then(() => 2));
    expect(result).toEqual(2);
    expect(error).toBeUndefined();
  });
  it('returns error', async () => {
    const [result, error] = await to(Promise.reject(new Error()));
    expect(result).toBeNull();
    expect(error).toBeInstanceOf(Error);
  });
});
