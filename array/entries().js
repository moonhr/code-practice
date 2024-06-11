//* 배열의 각 인덱스에 대한 키/값 쌍을 포함하는 새 배열 반복자 객체를 반환

const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();

console.log(iterator1.next().value);
// Expected output: Array [0, "a"]

console.log(iterator1.next().value);
// Expected output: Array [1, "b"]

//* 배열 내부에 있는 문자열 요소를 [key.value]이러한 모양 객체로 반환