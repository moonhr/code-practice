// *  reverse()(원본배열변경)에 대응되는 복사 메서드입니다. 이 메서드는 요소들을 반대로 뒤집은 새로운 배열을 반환
//* 역순으로 정렬된 새로운 배열을 반환합니다.

const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

const reversedItems = items.toReversed();
console.log(reversedItems); // [3, 2, 1]
console.log(items); // [1, 2, 3]