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
