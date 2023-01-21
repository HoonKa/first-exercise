// secret word: 'spoke'
// attempt: 'scope'
// result: 'cacpc'

// c - 's' is in the correct position
// a - 'c' is absent in the the secret word
// c - 'o' is in the correct position
// p - 'p' is present in the secret word but this is the wrong position
// c - 'e' is in the correct position
function checkWord(word: string, wordS: string): Array<string> {
  const size: number = wordS.length;
  const result: Array<string> = [];
  for (let i = 0; i < size; i += 1) {
    if (i === 0) {
      if (word[i].includes('s')) {
        result.push('c');
      } else if (word[i].includes('p' || 'o' || 'k' || 'e')) {
        result.push('p');
      } else {
        result.push('a');
      }
    } else if (i === 1) {
      if (word[i].includes('p')) {
        result.push('c');
      } else if (word[i].includes('s' || 'o' || 'k' || 'e')) {
        result.push('p');
      } else {
        result.push('a');
      }
    } else if (i === 2) {
      if (word[i].includes('o')) {
        result.push('c');
      } else if (word[i].includes('p' || 's' || 'k' || 'e')) {
        result.push('p');
      } else {
        result.push('a');
      }
    } else if (i === 3) {
      if (word[i].includes('k')) {
        result.push('c');
      } else if (word[i].includes('p' || 'o' || 's' || 'e')) {
        result.push('p');
      } else {
        result.push('a');
      }
    } else if (i === 4) {
      if (word[i].includes('e')) {
        result.push('c');
      } else if (word[i].includes('s' || 'p' || 'o' || 'k')) {
        result.push('p');
      } else {
        result.push('a');
      }
    }
  }

  return result;
}

export { checkWord };
