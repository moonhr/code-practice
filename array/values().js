// * 배열에서 각 인덱스에 대한 값을 순회하는 array iterator 객체를 반환

const array1 = ['a', 'b', 'c'];
const iterator = array1.values();

for (const value of iterator) {
  console.log(value);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"


const arr = ["a", "b", "c", "d", "e"];
const iteratorr = arr.values();

for (const letter of iteratorr) {
  console.log(letter);
} // "a" "b" "c" "d" "e"


//! Warning: 배열 반복자 객체는 일회용 객체입니다. 재사용하지 마세요.
const arrr = ["a", "b", "c", "d", "e"];
const values = arrr.values();
for (const letter of values) {
  console.log(letter);
}
// "a" "b" "c" "d" "e"
for (const letter of values) {
  console.log(letter);
}
// undefined

//* 순회 중간에 끊고 재실행
const arrrr = ["a", "b", "c", "d", "e"];
const valuess = arrrr.values();
for (const letter of valuess) {
  console.log(letter);
  if (letter === "b") {
    break;
  }
}
// "a" "b"

for (const letter of values) {
  console.log(letter);
}
// "c" "d" "e"