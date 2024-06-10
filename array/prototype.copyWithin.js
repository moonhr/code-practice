//* 배열의 일부를 인자로 사용해 같은배열 다른 위치로 얕게 복사하는 메서드
//* concat(~부터시작, 여기부터, 여기까지)라는 말투를 갖고있음

var arr = ['a', 'b', 'c', 'd', 'e'];

// 2번째 index부터 처음부터 끝까지 (default)의 엘리먼트를 복사합니다.
// 배열 길이를 넘어가는 부분은 무시됩니다.
console.log(arr.copyWithin(2)); // ["a", "b", "a", "b", "c"]

// 원본 배열이 변경됩니다.
console.log(arr); // ["a", "b", "a", "b", "c"]


const array1 = ['a', 'b', 'c', 'd', 'e'];

// Copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]

// Copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));
// Expected output: Array ["d", "d", "e", "d", "e"]


//? copyWithin(target, start)
//? copyWithin(target, start, end)

console.log([1, 2, 3, 4, 5].copyWithin(0, 3));
// [4, 5, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
// [4, 2, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1));
// [1, 2, 3, 3, 4]