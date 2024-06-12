//* 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환합니다. 이 메서드는 배열의 길이를 변하게 합니다.

const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// Expected output: Array [2, 3]

console.log(firstElement);
// Expected output: 1
