import healthIndicator from '../src/health';

describe('healthIndicator', () => {
  test.each([
    [{ health: 90 }, 'healthy'],
    [{ health: 50 }, 'wounded'],
    [{ health: 15 }, 'wounded'],
    [{ health: 10 }, 'critical']
  ])('for %o should return %s', (input, expected) => {
    expect(healthIndicator(input)).toBe(expected);
  });

  test('should throw error for invalid input', () => {
    expect(() => healthIndicator(null)).toThrow();
    expect(() => healthIndicator({})).toThrow();
  });
});