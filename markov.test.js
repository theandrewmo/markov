const MarkovMachine = require('./markov');

describe('MarkovMachine', () => {
  let mm;

  beforeEach(() => {
    mm = new MarkovMachine('the cat in the hat');
  });

  test('makeChains method should set the markov chains correctly', () => {
    const expectedChains = {
      the: ['cat', 'hat'],
      cat: ['in'],
      in: ['the'],
      hat: [undefined],
    };

    expect(mm.makeChains()).toEqual(expectedChains);
  });

  test('makeText method should generate random text from chains', () => {
    const randomText = mm.makeText(6); // Generating text with 6 words

    expect(typeof randomText).toBe('string');
    expect(randomText.split(' ').length).toBeLessThanOrEqual(6);
  });
});
