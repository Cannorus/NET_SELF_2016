function countChar(string, char)
{
  var count = 0;
  for (var i = 0; i<string.length; i++)
    if (string.charAt(i) == char) count++;
  return count;
}

function countBs(string)
{
  return countChar(string,"B");
}