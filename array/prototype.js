//Array.prototype[@@iterator]()
//배열의 각 인덱스의 값을 산출하는 새로운 순회 가능 순회자 객체
const array1 = ['a', 'b', 'c'];
const iterator1 = array1[Symbol.iterator]();

for (const value of iterator1) {
  console.log(value);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"