function ArraySeq(array)
{
  this.array = array; 
  this.position = -1;
}

ArraySeq.prototype.next = function ()
{
  if (this.position >= this.array.length - 1)
    return false;
  this.position++;
  return true;
}

ArraySeq.prototype.current = function()
{
  return this.array[this.position];
}

function RangeSeq(start, end)
{
  this.position = start - 1;
  this.end = end;
}

RangeSeq.prototype.next = function()
{
  if (this.position >= this.end)
    return false;
  this.position++;
  return true;
}

RangeSeq.prototype.current = function()
{
  return this.position;
}

function logFive(array)
{
  for (var i = 0; i < 5; i++)
  {
    if (!array.next())
      break;
    console.log(array.current());
  }
}

logFive(new ArraySeq([1, 2]));

logFive(new RangeSeq(100, 1000));