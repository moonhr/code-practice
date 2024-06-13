//* 배열 안의 어떤 요소라도 주어진 판별 함수를 적어도 하나라도 통과하는지 테스트 boolean값 반환
//* 내가 원하는 조건의 요소가 있는지 검사함 / 반복메서드

const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// Expected output: true


// 화살표 함수
some((element) => { /* … */ })
some((element, index) => { /* … */ })
some((element, index, array) => { /* … */ })

// 콜백 함수
some(callbackFn)
//인자는 실행함수, this로 사용되는 값
some(callbackFn, thisArg)

// 인라인 콜백 함수
some(function (element) { /* … */ })
some(function (element, index) { /* … */ })
some(function (element, index, array) { /* … */ })
some(function (element, index, array) { /* … */ }, thisArg)


//* 배열의 요소 테스트
function isBiggerThan10(element, index, array) {
  return element > 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10); // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true

//* 배열의 요소 테스트(화살표함수)
[2, 5, 8, 1, 4].some((x) => x > 10); // false
[12, 5, 8, 1, 4].some((x) => x > 10); // true


//* 어떤 값이든 불리언으로 변환
const TRUTHY_VALUES = [true, "true", 1];

function getBoolean(value) {
  if (typeof value === "string") {
    value = value.toLowerCase().trim();
  }

  return TRUTHY_VALUES.some((t) => t === value);
}

getBoolean(false); // false
getBoolean("false"); // false
getBoolean(1); // true
getBoolean("true"); // true