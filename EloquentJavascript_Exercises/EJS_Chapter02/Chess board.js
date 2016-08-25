var width = Number(prompt("Задайте ширину доски:"));
var height = Number(prompt("Задайте высоту доски:"));

var board = "";
if ((!isNaN(width))&&(!isNaN(height)))
{
  for (var i = 1; i <= height; i++)
  {
    for (var j = 1; j <= width; j++)
    {
      if (i%2 != 0)
        board += (j%2 != 0)?"#":" ";
      else
        board += (j%2 != 0)?" ":"#";
    }
    board += "\n";
  }
  console.log(board);
} else alert("Некорректные данные!");