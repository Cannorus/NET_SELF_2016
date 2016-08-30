function deepEqual(a,b)
{
  if (a === b)
    return true;
  if (a == null || b == null || typeof a != "object" || typeof b != "object")
    return false;
  var countPropA = 0;
  var countPropB = 0;
  for (var prop in a)
    countPropA++;
  for (var prop in b)
  {
    countPropB++;
    if (!(prop in a)||!deepEqual(a[prop],b[prop]))
      return false;
  }
  return (countPropA == countPropB);
}