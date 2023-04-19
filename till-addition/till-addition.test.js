const tillAddition = require('./till-addition.js')

describe('tillAddition', () => {
    test('should not accept an empty object', () => {
        expect(tillAddition({ })).toBe('you got no moneys');
    });
    test('should recognise that "1p" equals £0.01', () => {
        expect(tillAddition({"1p" : 1})).toBe('£0.01');
    });
    test('should recognise that "£50" equals £50.00', () => {
        expect(tillAddition({"£50" : 1})).toBe('£50');
    });
    test('should be able to do a full addition of the till ', () => {
        expect(tillAddition({ "5p": 1, "10p": 1, "20p": 1, "50p": 1, "£1": 1 })).toBe('£1.85');
    });
    test('should be able to do a full addition of the till ', () => {
        expect(tillAddition({ "5p": 1, "10p": 1, "20p": 1, "50p": 1, "£1": 2400, "£50" : 1, "£10": 44 })).toBe('£2890.85'); // wow busy day
    });
});