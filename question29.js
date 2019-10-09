function GetLeastNumbers_Solution(input, k) {
  if(!input || input.length == 0 || k < 1 || k > input.length) {
    return [];
  }
  const partition = (arr, start, end) => {
    if(start >= end) {
      return arr;
    }
    let i = start;
    let j = end;
    let middle = Math.floor((start + end) / 2);
    while(i <= j) {
      while(arr[i] < arr[middle]) {
        i++;
      }
      while(arr[j] > arr[middle]) {
        j--;
      }
      if(i <= j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
      }
    }
    return i;
  }

  const quickSort = (arr, start, end) => {
    if(arr.length <= 1) {
      return arr;
    }
    let index = partition(arr, start, end);
    if(start < index - 1) {
      arr = quickSort(arr, start, index - 1);
    }
    if(index < end) {
      arr = quickSort(arr, index, end);
    }
    return arr;
  }

  input = quickSort(input, 0, input.length - 1);
  return input.slice(0, k);
}
