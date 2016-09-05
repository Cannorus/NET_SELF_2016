topEnv["array"] = function(){
  return Array.prototype.slice.call(arguments);
};

topEnv["length"] = function(array){
  return array.length;
};

topEnv["element"] = function(array,elt){
  return array[elt];
};

run("do(define(sum, fun(array,",
    "     do(define(i, 0),",
    "        define(sum, 0),",
    "        while(<(i, length(array)),",
    "          do(define(sum, +(sum, element(array, i))),",
    "             define(i, +(i, 1)))),",
    "        sum))),",
    "   print(sum(array(1, 2, 3))))");
// > 6