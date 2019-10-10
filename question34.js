function FirstNotRepeatingChar(str) {
  let m = new Map();
  for(let i = 0; i < str.length; i++) {
    if(m.has(str[i])) {
      let count = m.get(str[i]);
      count++;
      m.set(str[i], count);
    } else {
      m.set(str[i], 1);
    }
  }

  //Map的遍历顺序就是插入顺序
  for(let key of m.keys()) {
    if(m.get(key) == 1) {
      return str.indexOf(key);
    }
  }
  return -1;
} 