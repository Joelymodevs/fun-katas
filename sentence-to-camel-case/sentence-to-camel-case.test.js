const sentenceToCamelCase = require('./sentence-to-camel-case')

describe('sentenceToCamelCase', () => {
    test('should not take an empty string', () => {
        expect(sentenceToCamelCase("", true)).toBe("that is not a sentence")
    });
    test('should not take an argument with no boolean', () => {
        expect(sentenceToCamelCase("thissentence")).toBe("please provide a boolean")
    });
    test('should work with uppercamel', () => {
        expect(sentenceToCamelCase("this sentence", true)).toBe("ThisSentence")
    });
    test('should work with uppercamel when the sentence is in random case', () => {
        expect(sentenceToCamelCase("THiS SenTEnce", true)).toBe("ThisSentence")
    });
    test('should work with lowercamel', () => {
        expect(sentenceToCamelCase("this sentence", false)).toBe("thisSentence")
    });
    test('should work with lowercamel in random case', () => {
        expect(sentenceToCamelCase("ThIS sENTEnce", false)).toBe("thisSentence")
    });
});