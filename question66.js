function movingCount(threshold, rows, cols) {
  if(!threshold || threshold < 0 || rows <= 0 || cols <= 0) {
    return 0;
  }

  //计算数字各位之和
  const countNum = (num) => {
    let total = 0;
    while(num) {
      let bit = num % 10;
      num = (num - bit) / 10;
      total += bit;
    }
    return total;
  }

  //计算能够访问的格子数
  const findBlanks = (visited, i, j) => {
    if(i >= rows || j >= cols || i < 0 || j < 0) {
      return 0;
    }
    let total = countNum(i) + countNum(j);
    if(threshold >= total && visited[i][j] == 0) {
      visited[i][j] = 1;
      return findBlanks(visited, i - 1, j) + findBlanks(visited, i + 1, j) + findBlanks(visited, i, j - 1) + findBlanks(visited, i, j + 1) + 1;
    } else {
      return 0;
    }
  }
  
  //初始化访问矩阵
  let visited = [];
  for(let i = 0; i < rows; i++) {
    visited[i] = [];
    for(let j = 0; j < cols; j++) {
      visited[i][j] = 0;
    }
  }

  return findBlanks(visited, 0 , 0);
}