function arrayToList(array)
{
  var list = null;
  for (var i = array.length - 1; i >= 0; i--)
  {
    list = { value: array[i] , rest: list};
  }
  return list;
}

function listToArray(list)
{
  var array = [];
  var i = 0;
  for (var node = list; node; node = node.rest )
  {
    array[i] = node.value;
    i++;
  }
  return array;
}

function prepend(element, list)
{
  return {value: element, rest: list};
}

function nth(list, n)
{
  if (!list)
    return undefined;
  else if (n == 0)
    return list.value;
  else return nth(list.rest, n-1);
}