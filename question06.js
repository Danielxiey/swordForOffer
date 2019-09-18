function minNumberInRotateArray(rotateArray) {
  let length = rotateArray.length;
  if(length == 0) {
    return 0;
  }
  let left = 0;
  let right = length - 1;
  let middle = Math.floor((left + right) / 2);
  if(rotateArray[left] < rotateArray[right]) {
    return rotateArray[left];
  } else if(rotateArray[left] == rotateArray[middle] && rotateArray[middle] == rotateArray[right]) {
    let min = rotateArray[0];
    for(let i = 0; i < rotateArray.length; i++) {
      if(rotateArray[i] < min) {
        min = rotateArray[i];
      }
    }
    return min;
  } else {
    while(left != right - 1) {
      if(rotateArray[middle] >= rotateArray[left]) {
        left = middle;
      } else {
        right = middle;
      }
      middle = Math.floor((left + right) / 2);
    }
    return rotateArray[right];
  }
}