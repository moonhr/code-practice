//* 누적기에 대해 함수를 적용하고 배열의 각 값 (오른쪽에서 왼쪽으로)은 값을 단일 값으로 줄여야합니다.

const array1 = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const result = array1.reduceRight((accumulator, currentValue) =>
  accumulator.concat(currentValue),
);

console.log(result);
// Expected output: Array [4, 5, 2, 3, 0, 1]

//이중배열 전개하기
var flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduceRight(function (a, b) {
  return a.concat(b);
}, []);
// flattened is [4, 5, 2, 3, 0, 1]

//reduce와 reduceRight의 차이점

var a = ["1", "2", "3", "4", "5"];
var left = a.reduce(function (prev, cur) {
  return prev + cur;
});
var right = a.reduceRight(function (prev, cur) {
  return prev + cur;
});

console.log(left); // "12345"
console.log(right); // "54321"