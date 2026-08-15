import { divideby4andadd } from '../src/calculator.js';

describe('divideby4andadd', () => {
  it('divides both arguments by four and adds the results', () => {
    expect(divideby4andadd(8, 12)).toBe(5);
  });

  it('handles decimal values', () => {
    expect(divideby4andadd(2.5, 6.5)).toBe(2.25);
  });

  it('handles negative values', () => {
    expect(divideby4andadd(-8, 12)).toBe(1);
  });
});
