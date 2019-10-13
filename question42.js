function FindNumbersWithSum(array, sum) {
  if(!array || array.length < 2 || !sum) {
    return [];
  }
  let start = 0;
  let end = array.length - 1;
  let result = [], multiple = 0;
  while(start != end) {
    let total = array[start] + array[end];
    if(total < sum) {
      start++;
    } else if(total > sum) {
      end--;
    } else if(total == sum) {
      if(result.length > 0) {
        let tempMultiple = array[start] * array[end]
        if(tempMultiple < multiple) {
          result[0] = array[start];
          result[1] = array[end];
          multiple = tempMultiple;
        }
      } else {
        result.push(array[start], array[end]);
        multiple = result[0] * result[1];
      }
      start++;
    }
  }
  return result;
}