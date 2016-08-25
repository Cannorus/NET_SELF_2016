for (var i = 1; i <= 100; i++)
{
  var line = "";
  if (i%3 == 0)
    line += "Fizz";
  if (i%5 == 0)
    line += "Buzz";
  console.log(line||i);
}