//* 배열의 각 인덱스에 대한 키를 포함하는 새로운 배열 반복자 객체를 반환

const array1 = ['a', 'b', 'c'];
const iterator = array1.keys();

for (const key of iterator) {
  console.log(key);
}

// Expected output: 0
// Expected output: 1
// Expected output: 2