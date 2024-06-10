//* 두개 이상의 배열을 병합해 새 배열을 만드는 메서드
//* 기존 배열에 추가가 아닌 새로운 배열을 만드는 역할

//* 두 배열을 연결
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]

//* 세 배열을 연결
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers = num1.concat(num2, num3);

console.log(numbers);
// 결과는 [1, 2, 3, 4, 5, 6, 7, 8, 9]

//* 값을 배열에 연결
const letters = ["a", "b", "c"];

const alphaNumeric = letters.concat(1, [2, 3]);

console.log(alphaNumeric);
// 결과는 ['a', 'b', 'c', 1, 2, 3]
