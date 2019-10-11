function InversePairs(data) {
  if(!data || data.length < 2) {
    return 0;
  }
  let copy = data.concat();

  const mergeCount = (data, copy, start, end) => {
    if(start == end) {
      return 0;
    }
    let middle = Math.floor((start + end) / 2);
    let left = mergeCount(copy, data, start, middle);
    let right = mergeCount(copy, data, middle + 1, end);
    
    let i = middle;
    let j = end;
    let count = 0;
    let index = end;
    while(i >= start && j >= middle + 1) {
      if(data[i] > data[j]) {
        copy[index--] = data[i--];
        count += j - middle;
      } else {
        copy[index--] = data[j--];
      }
    }

    if(i < start) {
      while(j >= middle + 1) {
        copy[index--] = data[j--];
      }
    } else {
      while(i >= start) {
        copy[index--] = data[i--];
      }
    }
    return left + count + right;
  }

  let count = mergeCount(data, copy, 0, data.length - 1);
  return count % 1000000007;
}