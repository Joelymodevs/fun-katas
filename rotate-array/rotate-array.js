// Please do not change the name of this function
function rotateArray (arr, num) {
  // if (num === 1) {
  //   arr.unshift(arr.pop());
  //   return arr
  // }
  // if (num === 0) {
  //   return arr;
  // }
  if (num === 0) {
    return arr;
  } 
        if (num > 0) {
        while (num > 0) {
        arr.unshift(arr.pop());
        num--;
      }
      return arr;
    } 
    if (num < 0) {
      while (num < 0) {
        arr.push(arr.shift())
        num++;
      }
      return arr
    }
  
};

module.exports =  rotateArray;
