function Find(target, array) {
  let row = 0;
  let col = array[0].length - 1;
  while(row < array.length && col >= 0) {
    if(array[row][col] === target) {
      return true;
    } else if(array[row][col] > target) {
      col--;
    } else if(array[row][col] < target) {
      row++;
    }
  }
  return false;
}
