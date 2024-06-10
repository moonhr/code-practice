//* 배열의 모든 요소가 제공된 함수로 구현된 테스트를 통과하는지 테스트함 불리언값으로 반환

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// Expected output: true


//* 모든 배열의 크기 테스트
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough); // false
[12, 54, 18, 130, 44].every(isBigEnough); // true


