let map;
//Init module if you need
function Init()
{
  map = new Map();
}
//Insert one char from stringstream
function Insert(ch)
{
  if(map.has(ch)) {
    map.delete(ch);
  } else {
    map.set(ch, 1);
  }
}
//return the first appearence once char in current stringstream
function FirstAppearingOnce()
{
  if(map.size == 0) {
    return '#';
  } else {
    for(let key of map.keys()) {
      return key;
    }
  }
}