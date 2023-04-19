const calculateDivisors = require('../calculate-divisors')

describe('calculateDivisors', () => {
    test('should return 0 ', () => {
        expect(calculateDivisors(1)).toBe(0);
    });
    test('should return 3', () => {
        expect(calculateDivisors(5)).toBe(3);
    });
    test('should return 8', () => {
        expect(calculateDivisors(10)).toBe(23);
    });
    test('should return 8', () => {
        expect(calculateDivisors(12)).toBe(33);
    });
    test('should return 8', () => {
        expect(calculateDivisors(6)).toBe(8);
    });
});