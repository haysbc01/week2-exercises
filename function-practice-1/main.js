/* Triple Five */

var tripleFive = function (x){
  for (var i=1; i <= x; i++) {
    console.log('Five!');
  }
}

tripleFive(3);

//OR

var tripleFive2 = function (){
  for (var i=1; i <= 3; i++) {
    console.log('Five!');
  }
}

tripleFive2();

/* lastLetter */

var lastLetter = function (string) {
  console.log (string.slice(-1));
}

lastLetter('hello');
lastLetter('island');

/* Square */

var square = function (y) {
  return y*y;
}

console.log(square(3));
console.log(square(5));

/* negate */

var negate = function (n) {
  return -n;
}

console.log(negate(5));
console.log(negate(-8));

/* toArray */

var toArray = function (a,b,c) {
  return [a,b,c];
}

console.log(toArray(1,4,5));
console.log(toArray(8,9,10));

/* startsWithA */

var startsWithA = function (s) {
  if (s.substring(0,1) =='a') {
    console.log(true);
  } else {
    console.log(false);
  }
}

startsWithA('aardvark');
startsWithA('bear');

/* excite */

var excite = function (singleString) {
  return (singleString + "!!!")
}

console.log (excite('yes'));
console.log (excite('go'));

/* Sun */

var sun = function (anotherString) {
  if (anotherString.indexOf('sun') > -1)  {
    return true;
  } else {
    return false;
  }
}

console.log (sun('sundries'));
console.log (sun('asunder'));
console.log (sun('catapult'));

/* tiny */

var tiny = function (number) {
  if (number < 1 && number > 0) {
    return true;
  } else{
    return false;
  }
}

console.log (tiny(0.3));
console.log (tiny(14));
console.log (tiny(-5));

/* Get Seconds */

var getSeconds = function (time) {
  var split = time.split(':');
  var sec = split[0]*60 + split[1] * 1;
  console.log (sec);
}

getSeconds('01:30');
getSeconds('10:25');
