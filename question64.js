function maxInWindows(num, size) {
  if(!num || num.length == 0 || !size || size < 1 || num.length < size) {
    return [];
  }

  const findMax = (arr, start, end) => {
    let max = arr[start];
    for(let i = start + 1; i <= end; i++) {
      if(arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }

  let start = 0, end = size - 1;
  let max = findMax(num, start, end);
  let result = [max];
  while(end < num.length - 1) {
    if(num[start] < max) {
      start++;
      if(num[++end] > max) {
        max = num[end];
      }
    } else {
      max = findMax(num, ++start, ++end);
    }
    result.push(max);
  }
  return result;
}