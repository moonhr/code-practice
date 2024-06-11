//* 배열의 각 요소에 주어진 콜백 함수를 적용한 다음 그 결과를 한 단계씩 평탄화하여 형성된 새 배열을 반환

const arr1 = [1, 2, 1];

const result = arr1.flatMap((num) => (num === 2 ? [2, 2] : 1));

console.log(result);
// Expected output: Array [1, 2, 2, 1]



const arr2 = [1, 2, 3, 4];

arr2.map((x) => [x * 2]);
// [[2], [4], [6], [8]]

arr2.flatMap((x) => [x * 2]);
// [2, 4, 6, 8]

// 오직 한 단계만 평탄화됩니다.
arr2.flatMap((x) => [[x * 2]]);
// [[2], [4], [6], [8]]



const arr3 = ["it's Sunny in", "", "California"];

arr3.map((x) => x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]

arr3.flatMap((x) => x.split(" "));
// ["it's","Sunny","in", "", "California"]


//* map 도중 항목을 추가 및 제거하는 경우
// 음수를 모두 제거하고
// 홀수를 짝수와 1로 분할한다고 가정해 보겠습니다.
const a = [5, 4, -3, 20, 17, -33, -4, 18];
//         |\  \  x   |  | \   x   x   |
//        [4,1, 4,   20, 16, 1,       18]

const resulta = a.flatMap((n) => {
  if (n < 0) {
    return [];
  }
  return n % 2 === 0 ? [n] : [n - 1, 1];
});
console.log(resulta); // [4, 1, 4, 20, 16, 1, 18]
