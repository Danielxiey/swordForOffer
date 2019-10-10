function PrintMinNumber(numbers) {
  if(!numbers || numbers.length == 0) {
    return '';
  }
  let tempArr = numbers.concat();
  tempArr.sort(function(a, b) {
    a = a + '';
    b = b + '';
    
    let ab = a + b;
    let ba = b + a;

    //解决超出整数范围的数字问题
    for(let i = 0; i < ab.length; i++) {
      if(ab.charCodeAt(i) < ba.charCodeAt(i)) {
        return -1;
      } else if(ab.charCodeAt(i) > ba.charCodeAt(i)) {
        return 1;
      }
    }
    return -1;
  });
  let str = tempArr.join('');
  return parseInt(str);
}