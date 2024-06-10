//* 문자열 등 유사 배열(Array-like) 객체나 이터러블한 객체를 배열로 만들어주는 메서드
//유사 배열 객체란, 키가 인덱스 값으로 되어있고 길이를 나타내는 length 속성을 갖는 객체를 의미

// 1. 문자열을 배열로 만드는 예시
console.log(Array.from("Hello"));
// [ 'H', 'e', 'l', 'l', 'o' ]

// 2. 유사 배열 객체를 배열로 만드는 예시
console.log(Array.from({ 0: "찬민", 1: "희진", 2: "태인", length: 3 }));
// [ '찬민', '희진', '태인' ]

// 3. 함수의 매개변수들을 순서대로 배열로 만드는 예시
const funcA = (...arguments) => {
    return Array.from(arguments)
}

console.log(funcA(1,2,3,4,5));
// [ 1, 2, 3, 4, 5 ]


//* array에 1부터 31까지 수를 원소로 갖는 배열을 생성하는 두가지 방법

//1. array.from 사용하기
// 맵핑 함수의 첫 번째 인자 언더스코어(_) 는 특별한 인자가 아니라,
// 불필요한 인자의 공간을 채우기 위한 용도입니다.

const array = Array.from(Array(31), (_, index) => index + 1);

console.log(array);

//2. 반복문 사용하기
const arr = [];

for (let i = 1; i <= 31; i++) {
  arr.push(i);
}

console.log(arr);