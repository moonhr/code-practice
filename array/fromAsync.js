//* 새로운 array 인스턴스인 새로운 promise 를 생성하는 메서드 
//* 비동기 순회 가능, 순회 가능 객체, 유사 배열 객체일 경우 array.fromAsync을 통해 array를 만든다.

//Array.fromAsync(arrayLike)
//Array.fromAsync(arrayLike, mapFn)
//Array.fromAsync(arrayLike, mapFn, thisArg)

//비동기 순회 가능 객체란 (ReadableStream와 AsyncGenerator 같은 객체).

const asyncIterable = (async function* () {
  for (let i = 0; i < 5; i++) {
    await new Promise((resolve) => setTimeout(resolve, 10 * i));
    yield i;
  }
})();

Array.fromAsync(asyncIterable).then((array) => console.log(array));
// [0, 1, 2, 3, 4]
