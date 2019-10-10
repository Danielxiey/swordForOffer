function GetUglyNumber_Solution(index) {
  if(isNaN(index) || index <= 0) {
    return 0;
  } 
  let uglyNum = [1];
  let factor2 = 0, factor3 = 0, factor5 = 0;
  for(let i = 1; i < index; i++) {
    uglyNum[i] = Math.min(uglyNum[factor2] * 2, uglyNum[factor3] * 3, uglyNum[factor5] * 5);
    if(uglyNum[i] == uglyNum[factor2] * 2) {
      factor2++;
    } else if(uglyNum[i] == uglyNum[factor3] * 3) {
      factor3++;
    } else if(uglyNum[i] == uglyNum[factor5] * 5) {
      factor5++;
    }
    if(uglyNum[i] == uglyNum[i - 1]) {
      i--;
    }
  }
  return uglyNum[index - 1];
}