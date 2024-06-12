//* 배열의 각 요소에 대해 주어진 리듀서 (reducer) 함수를 실행하고, 하나의 결과값을 반환

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10

// 리듀서 함수는 네 개의 인자를 가집니다.
arr.reduce(callback(accumulator, currentValue, index, array), initialValue);
// 배열.reduce(callback(누적값, 현재값, 인덱스, 요소), 초기값);
//콜백의 최초 호출 때 accumulator와 currentValue는 다음 두 가지 값 중 하나를 가질 수 있습니다. 만약 reduce() 함수 호출에서 initialValue를 제공한 경우, accumulator는 initialValue와 같고 currentValue는 배열의 첫 번째 값과 같습니다.initialValue를 제공하지 않았다면, accumulator는 배열의 첫 번째 값과 같고 currentValue는 두 번째와 같습니다.

const arr = [{ value: 1 }, { value: 2 }, { value: 3 }];

const result = arr.reduce(function (acc, cur, idx) {
  console.log(`${idx}번째 idx`);
  console.log(acc);
  console.log(cur);
  console.log("\n");
  return acc + cur.value;
}, 0);

console.log(`result : ${result}`);

// 0번째 idx
// 0
// { value: 1 }

// 1번째 idx
// 1
// { value: 2 }

// 2번째 idx
// 3
// { value: 3 }

// result : 6