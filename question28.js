function MoreThanHalfNum_Solution(numbers) {
  if(!numbers || numbers.length == 0) {
    return 0;
  }
  const partition = (arr, start, end) => {
    if(arr.length == 1) {
      return arr;
    }
    let middle = Math.floor((start + end) / 2);
    let i = start;
    let j = end;
    while(i <= j) {
      if(arr[i] < arr[middle]) {
        i++;
      }
      if(arr[j] > arr[middle]) {
        j--;
      }
      if(i <= j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
      }
      return i;
    }
  }

  const sort = (arr, start, end) => {
    let index = partition(arr, start, end);
    if(start < index - 1) {
      arr = sort(arr, start, index - 1);
    } 
    if(end > index + 1) {
      arr = sort(arr, index + 1, end);
    }
    return arr;
  }

  numbers = sort(numbers, 0, numbers.length - 1);

  let most = numbers[Math.floor(numbers.length / 2)];
  let count = 0;
  for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] == most) {
      count++;
    }
    if(count >= Math.floor(numbers.length / 2) + 1) {
      break;
    }
  }

  if(count >= Math.floor(numbers.length / 2) + 1) {
    return most;
  } else {
    return 0;
  }
}