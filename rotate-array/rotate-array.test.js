const rotateArray = require('./rotate-array')


describe('rotateArray', () => {
    test('should rotate array by 1', () => {
        expect(rotateArray([1, 2, 3], 1)).toEqual([3,1,2]);
    });
    test('should not rotate array if 0', () => {
        expect(rotateArray([1, 2, 3], 0)).toEqual([1,2,3]);
    });
    test('should rotate array by 3 ', () => {
        expect(rotateArray([1, 2, 3, 4, 5], 3)).toEqual([3, 4, 5, 1, 2]);
    });
    test('should rotate array by -3 ', () => {
        expect(rotateArray([1, 2, 3, 4, 5], -3)).toEqual([4, 5, 1, 2, 3]);
    });
});