function FindNumsAppearOnce(array) {
  if(!array || array.length < 2) {
    return [];
  }
  let xorResult = 0;
  for(let i = 0; i < array.length; i++) {
    xorResult ^= array[i];
  }

  const getIndex1 = (num) => {
    let index = 1;
    while((num & 1) == 0 && num != 0) {
      index++;
      num = num >> 1;
    }
    return index;
  }

  let index1 = getIndex1(xorResult);
  let num1 = 0, num2 = 0;
  for(let i = 0; i < array.length; i++) {
    if(getIndex1(array[i]) == index1) {
      num1 ^= array[i];
    } else {
      num2 ^= array[i];
    }
  }
  return [num1, num2];
}