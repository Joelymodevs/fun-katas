// Please do not change the name of this function
function updateRemoteStudents (arr) {
  const newArr = []
  if (arr.length === 0) return []
  for (let i = 0; i < arr.length; i++) {
    const obj = Object.assign({}, arr[i]);
    if (!obj.hasOwnProperty('location')) {
      obj.location = 'remote';
    }
    newArr.push(obj);
  }
  return newArr;
}

module.exports = updateRemoteStudents;
