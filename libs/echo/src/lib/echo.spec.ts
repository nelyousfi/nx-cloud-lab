import { echo } from './echo';

describe('echo', () => {
  it('should work', () => {
    expect(echo()).toEqual('echo');
  });
});
