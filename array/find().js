//* 제공된 배열에서 제공된 테스트 함수를 만족하는 첫 번째 요소를 반환
// todo 순회메서드
// 1. 배열에서 찾은 요소의 인덱스가 필요한 경우, findIndex()를 사용하세요.
// 2. 값의 인덱스를 찾아야 하는 경우, indexOf()를 사용하세요.
// 3. 배열에 값이 존재하는지 찾아야 하는 경우, includes()를 사용하세요.
// 4. 제공된 테스트 함수를 만족하는 요소가 있는지 찾아야 하는 경우, some()을 사용하세요.

const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// Expected output: 12



findIndex() 
//* 메서드는 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환합니다. 만족하는 요소가 없으면 -1을 반환합니다.
const array2 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array2.findIndex(isLargeNumber));
// Expected output: 3




findLast() 
//* 메서드는 배열을 역순으로 순회하며 제공된 테스트 함수를 만족하는 첫 번째 요소의 값을 반환합니다. 테스트 함수를 만족하는 요소가 없으면 undefined가 반환됩니다.
const array3 = [5, 12, 50, 130, 44];

const foun = array3.findLast((element) => element > 45);

console.log(foun);
// Expected output: 130




findLastIndex() 
//* 메서드는 배열을 역순으로 순회하며 주어진 판별 함수를 만족하는 만족하는 배열의 첫번째 요소의 인덱스를 반환합니다. 만족하는 요소가 없으면 -1을 반환합니다.
const array4 = [5, 12, 50, 130, 44];

const isLargeNumbe = (element) => element > 45;

console.log(array4.findLastIndex(isLargeNumbe));
// Expected output: 3
// Index of element with value: 130