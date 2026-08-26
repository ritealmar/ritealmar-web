import { describe, it, expect } from 'vitest';
import { calculateRecoverableHours, calculateMaturityScore } from '../src/utils/calculatorUtils';
import { isValidSector } from '../src/utils/analyticsTracker';

describe('Calculator Utilities', () => {
  it('calculateRecoverableHours should return correctly', () => {
    expect(calculateRecoverableHours(5, 10)).toBe(200); // 5 * 10 * 4 = 200
    expect(calculateRecoverableHours(0, 10)).toBe(0);
    expect(calculateRecoverableHours(-1, 10)).toBe(0);
  });

  it('calculateMaturityScore should ignore invalid answers and calculate correctly', () => {
    const answers = {
      q1: 10,
      q2: 15,
      q3: '20',
      q4: null,
      q5: undefined,
      q6: 'invalid'
    };
    // 10 + 15 + 20 = 45. (45 - 20) / 80 * 100 = 25/80 * 100 = 31.25 -> 31
    expect(calculateMaturityScore(answers)).toBe(31);
  });
});

describe('Analytics validation', () => {
  it('isValidSector should validate sectors correctly', () => {
    expect(isValidSector('clinicas')).toBe(true);
    expect(isValidSector('inmobiliarias')).toBe(true);
    expect(isValidSector('ecommerce')).toBe(true);
    expect(isValidSector('constructoras')).toBe(true);
    expect(isValidSector('invalid')).toBe(false);
    expect(isValidSector('')).toBe(false);
  });
});
