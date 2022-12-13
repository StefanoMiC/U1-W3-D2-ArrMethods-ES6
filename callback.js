const sumWithCallback = function (n1, n2, callback) {
  let result = n1 + n2;

  callback(result); // sayHi(num); sayBye(num); function(num){}
};

const sayHi = function (x) {
  console.log(x + " HI!!!");
};

const sayBye = function (x) {
  console.log("byeeeeeeee " + x + "!!!!");
};

sumWithCallback(2, 3, sayHi);
sumWithCallback(3, 5, sayBye);
sumWithCallback(3, 6, function (x) {
  console.log("HALLOOOO, " + x);
});
