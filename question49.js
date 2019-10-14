let illegalInput = false;
function StrToInt(str) {
  if(!str || str.length == 0 || str == '+' || str == '-') {
    illegalInput = true;
    return 0;
  }

  let positive = true;
  let num = 0, multiple = 1;
  for(let i = str.length - 1; i >= 0; i--) {
    if(str[i] >= '0' && str[i] <= '9') {
      num += (str.charCodeAt(i) - 48) * multiple;
      multiple *= 10;
    } else if(str[i] == '+' && i == 0) {
      positive = true;
    } else if(str[i] == '-' && i == 0) {
      positive = false;
    } else {
      illegalInput = true;
      return 0;
    }
  }

  num = positive == true ? num : -num;

  //为了AC而做的特殊判断==
  const MAX = Math.pow(2, 31) - 1;
  const MIN = -Math.pow(2, 31);

  if(positive) {
    return num > MAX ? 0 : num;
  } else {
    return num < MIN ? 0 : num;
  }
}