/** Textual markov chain generator */

class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    this.chain = {};
    for (let [index,word] of this.words.entries()) {
      if (!this.chain[word]) {
        this.chain[word] = []
      }
      this.chain[word].push(this.words[index+1])
    }
    return this.chain
  }

  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
    let newSentence = []
    const chainKeys = Object.keys(this.chain)
    for (let i=0; i<numWords/2; i++) {
      let nextWord = chainKeys[Math.floor(Math.random() * chainKeys.length)]
      newSentence.push(nextWord)

      const subChain = this.chain[nextWord]
      let subChainWord = subChain[Math.floor(Math.random() * subChain.length)]
      if (!subChainWord || newSentence.length === numWords) return newSentence.join(' ')
      newSentence.push(subChainWord)
    }
    return newSentence.join(' ')
  }
}

module.exports = MarkovMachine;
