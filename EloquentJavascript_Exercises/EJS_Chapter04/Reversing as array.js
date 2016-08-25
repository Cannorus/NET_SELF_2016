function reverseArray(array)
{
  var rArray = [];
  for (var i = array.length-1; i >= 0; i--)
  {
    rArray.push(array[i]);
  }
  return rArray;
}

function reverseArrayInPlace(array)
{
  var temp;
  for (var i = 0; i < array.length/2; i++)
  {
    temp = array[i];
    array[i] = array[array.length-1-i];
    array[array.length-1-i] = temp;
  }
}