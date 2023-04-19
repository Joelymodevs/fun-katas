const getTweetData = require('../get-tweet-data');


describe('getTweetData', () => {
    test('should return tweet length ', () => {
        expect(getTweetData("My awesome tweet")).toEqual( { tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 16 })
    });
    test('should return tweet length + @s ', () => {
        expect(getTweetData("My awesome tweet to @northcoders")).toEqual( { tags: [], mentions: ['@northcoders'], tagCount: 0, mentionCount: 1, length: 32 })
    });
    test('should return tweet length + tags ', () => {
        expect(getTweetData("My awesome tweet about #coding")).toEqual( { tags: ['#coding'], mentions: [''], tagCount: 1, mentionCount: 0, length: 30 })
    });
    test('should return tweet length + tags + @s', () => {
        expect(getTweetData("My awesome tweet about #coding to @northcoders")).toEqual( { tags: ['#coding'], mentions: ['@northcoders'], tagCount: 1, mentionCount: 1, length: 46 });
        
    });
    test('should return tweet length + tags + @s', () => {
        expect(getTweetData("I am #coding with @northcoders I love #coding and @northcoders")).toEqual( { tags: ['#coding'], mentions: ['@northcoders'], tagCount: 1, mentionCount: 1, length: 62 });
        
    });
});