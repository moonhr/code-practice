//전달된 값이 배열인지 판단하는 메서드 참 거짓으로 나옴
console.log(Array.isArray([1, 3, 5]));
// Expected output: true

console.log(Array.isArray('[]'));
// Expected output: false

//Array구문으로 만들어지면 배열이다
console.log(Array.isArray(new Array(5)));
// Expected output: true

//근데 이건 배열 아님
Array.isArray(new Uint8Array(32));

console.log(Array.isArray(new Int16Array([15, 33])));
// Expected output: false