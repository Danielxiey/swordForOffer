function printMatrix(matrix) {
  if(!matrix) {
    return null;
  }
  const loopPrint = (start, result) => {
    let endX = rows - 1 - start;
    let endY = cols - 1 - start;
    if(endY >= start) {
      for(let i = start; i <= endY; i++) {
        result.push(matrix[start][i]);
      }
    }
    if(endX > start) {
      for(let i = start + 1; i <= endX; i++) {
        result.push(matrix[i][endY]);
      }
    }
    if(endX > start && endY > start) {
      for(let i = endY - 1; i >= start; i--) {
        result.push(matrix[endX][i]);
      }
    }
    if(endX > start + 1 && endY > start) {
      for(let i = endX - 1; i > start; i--) {
        result.push(matrix[i][start]);
      }
    }
    return result;
  }
  let rows = matrix.length;
  let cols = matrix[0].length;
  let start = 0;
  let result = [];
  while(start * 2 < rows && start * 2 < cols) {
    result = loopPrint(start, result);
    start++;
  }
  return result;
}