//s字符串
function isNumeric(s) {
  if(s == null || s.length == 0) {
    return false;
  }

  const unsignedInt = (str) => {
    while(str[i] >= '0' && str[i] <= '9') {
      i++;
    }
    return true;
  }

  const integer = (str) => {
    if(str[i] == '+' || str[i] == '-') {
      i++;
    }
    return unsignedInt(str);
  }

  const ecount = (str) => {
    if(i == 0 || i == str.length - 1) {
      return false;
    } else {
      i++;
      return integer(str);
    }
  }

  s = s.toLowerCase();
  let i = 0;
  let flag = true;
  integer(s);
  if(s[i] == '.' && i != 0 && i != s.length - 1) {
    i++;
    unsignedInt(s);
    if(s[i] == 'e') {
      flag = flag && ecount(s);
    }
  } else if(s[i] == 'e') {
    flag = flag && ecount(s);
  }

  if(flag && i == s.length) {
    return true;
  } else {
    return false;
  }
}