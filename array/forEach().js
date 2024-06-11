//* 각 배열 요소에 대해 제공된 함수를 한 번씩 실행

const ratings = [5, 4, 5];
let sum = 0;

const sumFunction = async (a, b) => a + b;

ratings.forEach(async (rating) => {
  sum = await sumFunction(sum, rating);
});

console.log(sum);
// 순진하게 예상한 출력: 14
// 실제 출력: 0



//* 배열 콘텐츠 출력
const logArrayElements = (element, index /*, array */) => {
  console.log(`a[${index}] = ${element}`);
};

// 배열에서 해당 위치에 항목이 없으므로
// 인덱스 2가 건너뛰어진 것을 확인할 수 있습니다.
[2, 5, , 9].forEach(logArrayElements);
// 로그:
// a[0] = 2
// a[1] = 5
// a[3] = 9



const words = ["one", "two", "three", "four"];
words.forEach((word) => {
  console.log(word);
  if (word === "two") {
    words.shift(); //'one'은 배열에서 삭제됩니다.
  }
}); // one // two // four

console.log(words); // ['two', 'three', 'four']
