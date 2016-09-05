function skipSpace(string) {
  var skip = string.match(/^(\s|#.*)*/);
  return string.slice(skip[0].length);
}

console.log(parse("# hello\nx"));
// > {type: "word", name: "x"}

console.log(parse("a # one\n   # two\n()"));
// > {type: "apply",
//    operator: {type: "word", name: "x"},
//    args: []}