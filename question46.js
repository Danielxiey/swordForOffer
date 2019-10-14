function LastRemaining_Solution(n, m) {
  if(n < 1 || m < 1) {
    return -1;
  }
  let arr = [];
  for(let i = 0; i < n; i++) {
    arr.push(i);
  }

  let index = 0
  while(arr.length > 1) {
    let length = arr.length;
    for(let i = m; i > 1; i--) {
      if(index == length - 1) {
        index = 0;
      } else {
        index++;
      }
    }
    arr.splice(index, 1);
    if(index == arr.length) {
      index = 0;
    }
  }
  return arr[0];
}