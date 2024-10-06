import { FilterfruitsPipe } from './filterfruits.pipe';

describe('FilterfruitsPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterfruitsPipe();
    expect(pipe).toBeTruthy();
  });
});

function expect(pipe: FilterfruitsPipe) {
  throw new Error('Function not implemented.');
}
