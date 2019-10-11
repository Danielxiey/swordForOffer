function GetNumberOfK(data, k) {
  if(!data || !k) {
    return 0;
  }
  const binarySearch = (arr, k, low, high) => {
    while(low <= high) {
      let mid = Math.floor((low + high) / 2);
      if(k < arr[mid]) {
        high = mid - 1;
      } else if(k > arr[mid]) {
        low = mid + 1;
      } else {
        return mid;
      }
    }
    return -1;
  }

  let index = binarySearch(data, k, 0 , data.length - 1);
  if(index == -1) {
    return 0;
  }
  let firstIndex = index, lastIndex = index;
  while(data[firstIndex - 1] == k) {
    firstIndex = binarySearch(data, k, 0, firstIndex - 1);
  }
  while(data[lastIndex + 1] == k) {
    lastIndex = binarySearch(data, k, lastIndex + 1, data.length - 1);
  }
  return lastIndex - firstIndex + 1;
}

console.log(GetNumberOfK([0,1,2,3,3,3,4,5], 3));