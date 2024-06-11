//todo fill()은 변경메서드
//* 배열의 인덱스 범위 내에 있는 모든 요소를 정적 값으로 변경하고 수정된 배열을 반환함

const array1 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array1.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(array1.fill(6));
// Expected output: Array [6, 6, 6, 6]

//구문
fill(value, start, end)
//* value 배열을 채울 값
//* start 채우기 시작할 0기반 인덱스
//* end 채우기 끝낼 0기반 인덱스

//반환값
//* value로 채워진 변경된 배열

// 배열의 각 슬롯이 참조하는 단일 객체
const arra = Array(3).fill({}); // [{}, {}, {}]
arra[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]

const arr = new Array(3);
for (let i = 0; i < arr.length; i++) {
  arr[i] = new Array(4).fill(1); // 크기가 4이고, 1로 채워진 배열 생성
}
arr[0][0] = 10;
console.log(arr[0][0]); // 10
console.log(arr[1][0]); // 1
console.log(arr[2][0]); // 1
