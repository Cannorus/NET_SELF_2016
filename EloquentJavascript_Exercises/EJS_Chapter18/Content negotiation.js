function request(type){
  var req = new XMLHttpRequest();
  req.open("GET", "http://eloquentjavascript.net/author", false);
  req.setRequestHeader("accept",type);
  req.send(null);
  return req.responseText;
}

var types = ["text/plain","text/html","application/json",
             "application/rainbows+unicorn"];

types.forEach(function(type){
  console.log(request(type),"\n");
});