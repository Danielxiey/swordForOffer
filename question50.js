function duplicate(numbers, duplication) {
  if(!numbers || numbers.length < 2) {
    return false;
  }

  const swap = (arr, index1, index2) => {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }

  for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] != i) {
      let m = numbers[i];
      if(numbers[m] == m) {
        duplication[0] = m;
        return true;
      } else {
        swap(numbers, i, m);
        i--;
      }
    }
  }
  return false;
}

console.log(duplicate([2,3,1,0,2,5,3], []));