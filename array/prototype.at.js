//정수값으로 받은 인자의 인덱스번호 순번을 꺼내주는 메서드
const array1 = [5, 12, 8, 130, 44];

let index = 2;

console.log(`An index of ${index} returns ${array1.at(index)}`);
// Expected output: "An index of 2 returns 8"

index = -2;

console.log(`An index of ${index} returns ${array1.at(index)}`);
// Expected output: "An index of -2 returns 130"

/////////

// 몇 가지 요소가 있는 배열
const cart = ["사과", "바나나", "배"];

// 주어진 배열의 마지막 요소를 반환하는 함수
function returnLast(arr) {
  return arr.at(-1);
}

// 'cart' 배열에서 마지막 요소를 가져옴
const item1 = returnLast(cart);
console.log(item1); // '배'

// 'cart'배열에 요소를 추가
cart.push("오렌지");
const item2 = returnLast(cart);
console.log(item2); // '오렌지'
