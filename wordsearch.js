const transpose = require('./matrix_transposition');

const horizontalSearch = (matrix, word) => {
  for (const line of matrix) {
    const horizontalJoin = line.join('');
    if (horizontalJoin.includes(word)) {
      return true;
    }
  }
  return false;
};

const wordSearch = (letters, word) => {

  if (letters.length === 0) {
    return false;
  }
  
  if (horizontalSearch(letters,word)) {
    return true;
  }

  if (horizontalSearch(transpose(letters),word)) {
    return true;
  }

  return false;
};


module.exports = wordSearch;