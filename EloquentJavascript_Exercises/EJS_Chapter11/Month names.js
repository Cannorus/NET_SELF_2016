var month = function(){
  var names = ["Январь","Февраль","Март","Апрель","Май",
              "Июнь","Июль","Август","Сентябрь","Октябрь",
              "Ноябрь","Декабрь"];
  return {
    name : function(number){
      return names[number];
    },
    number : function(name){
      return names.indexOf(name);
  	}
  };
}();

console.log(month.name(2));
// > March
console.log(month.number("Ноябрь"));
// > 10