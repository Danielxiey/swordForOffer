function Permutation(str) {
  if(!str || str.length == 0) {
    return [];
  }
  let arr = str.split('');
  let result = [];

  const swap = (arr, index1, index2) => {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
  }
  
  const order = (arr, fixPos) => {
    if(fixPos == arr.length - 1) {
      let orderStr = arr.join('');
      result.push(orderStr);
      return;
    }
    for(let i = fixPos; i < arr.length; i++) {
      arr = swap(arr, fixPos, i);
      order(arr, fixPos + 1);
      arr = swap(arr, fixPos, i);
    }
  }

  order(arr, 0);
  result = result.sort();   //重排序
  result = result.filter((item, index, arr) => {   //去重
    return arr.indexOf(item, index + 1) == -1;
  })
  return result;
}