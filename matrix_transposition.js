const transpose = function(matrix) {
  
  const transposed = [];
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      
      if (!transposed[j]) transposed.push([]);
      transposed[j][i] = matrix[i][j];
    }
  }
  return transposed;
};

module.exports = transpose;