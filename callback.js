function exampleCallback(a, b) {
  return a + b;
}
function one(a, b, callback) {
  return callback(a, b);
}
// 기존에 있던 함수를 콜백함수로 활용한 경우
let testone = one(1, 2, exampleCallback);
console.log(testone);

function two(a, b, callback) {
  return callback(a, b);
}

// 호출할때 함수를 작성해주는 경우 -> 일반적인 콜백함수 방식
let testTwo = two(2, 3, function (a, b) {
  return a - b;
});
console.log(testTwo);

function anotherFunc(a, b) {
  return a + b;
}
// 함수 three는 매개변수만 받아서 다른 함수에게 넘겨주는 역할만 한다.
function three(a, b) {
  return anotherFunc(a, b);
}
let testThree = three(3, 4);
console.log(testThree);