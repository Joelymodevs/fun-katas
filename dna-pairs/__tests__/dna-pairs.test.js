const dnaPairs = require('../dna-pairs.js');

describe('dnaPairs()', () => {
  test('should return an empty array for an empty string', () => {
    expect(dnaPairs('')).toEqual([]);
  });

  test('should return an array with one nested array for a single DNA pair', () => {
    expect(dnaPairs('A')).toEqual([['A', 'T']]);
    expect(dnaPairs('C')).toEqual([['C', 'G']]);
    expect(dnaPairs('G')).toEqual([['G', 'C']]);
    expect(dnaPairs('T')).toEqual([['T', 'A']]);
  });

  test('should return an array with multiple nested arrays for multiple DNA pairs', () => {
    expect(dnaPairs('ATCG')).toEqual([['A', 'T'], ['T', 'A'], ['C', 'G'], ['G', 'C']]);
    expect(dnaPairs('GCATTA')).toEqual([['G', 'C'], ['C', 'G'], ['A', 'T'], ['T', 'A'], ['T', 'A'], ['A', 'T']]);
  })

  test('should convert lowercase letters to uppercase letters', () => {
    expect(dnaPairs('atcg')).toEqual([['A', 'T'], ['T', 'A'], ['C', 'G'], ['G', 'C']]);
    expect(dnaPairs('gcatta')).toEqual([['G', 'C'], ['C', 'G'], ['A', 'T'], ['T', 'A'], ['T', 'A'], ['A', 'T']]);
  });

});
