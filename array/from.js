//* 새로운 array 인스턴스를 생성하는 메서드 
//* 순회 가능 객체, 유사 배열 객체일 경우 array.from을 통해 array를 만든다.

console.log(Array.from('foo'));
// Expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6]


//arrayLike : 배열로 변환할 순회 가능 또는 유사 배열 객체
Array.from(arrayLike)
//mapFn : 배열이 호출되기 전 모두 거치게되는 함수
Array.from(arrayLike, mapFn)
//thisArg : mapFn사용시에 this로 사용할 값
Array.from(arrayLike, mapFn, thisArg)