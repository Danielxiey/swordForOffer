function hasPath(matrix, rows, cols, path) {
  if(!matrix || matrix.length == 0 || rows < 1 || cols < 1 || !path) {
    return false;
  } 
  if(path == '') {
    return true;
  }

  //初始化访问矩阵
  const initVisted = (rows, cols) => {
    let visited = [];
    for(let i = 0; i < rows; i++) {
      visited[i] = [];
      for(let j = 0; j < cols; j++) {
        visited[i][j] = 0;
      }
    }
    return visited;
  }

  //寻找路径
  const findPath = (matrix, visited, i,  j, p) => {
    if(p == path.length) {
      return true;
    }
    if(i >= rows || j >= cols || i < 0 || j < 0) {
      return false;
    }
    if(matrix[i][j] == path[p] && visited[i][j] == 0) {
      visited[i][j] = 1;
      return findPath(matrix, visited, i - 1, j, p + 1) || findPath(matrix, visited, i + 1, j, p + 1) || findPath(matrix, visited, i, j - 1, p + 1) || findPath(matrix, visited, i, j + 1, p + 1);
    } else {
      return false;
    }
  }

  let str = matrix;
  matrix = [];
  let m = 0;
  //将输入的字符串转为矩阵
  for(let i = 0; i < rows; i++) {
    matrix[i] = [];
    for(let j = 0; j < cols; j++) {
      matrix[i][j] = str[m++];
    }
  }
  
  for(let j = 0; j < rows; j++) {
    for(let k = 0; k < cols; k++) {
      if(matrix[j][k] == path[0]) {
        let visited = initVisted(rows, cols);
        if(findPath(matrix, visited, j , k, 0)) {
          return true;
        }
      }
    }
  }
  return false;
}