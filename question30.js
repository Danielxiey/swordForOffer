function FindGreatestSumOfSubArray(array) {
  if(!array || array.length == 0) {
    return null;
  }
  let max = array[0];
  let total = array[0];
  for(let i = 1; i < array.length; i++) {
    if(total >= 0) {
      total += array[i];
    } else {
      total = array[i];
    }
    if(total > max) {
      max = total;
    }
  }
  return max;
}