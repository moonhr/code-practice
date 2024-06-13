//* sort()에 대응되는 복사 메서드입니다. 이 메서드는 요소들을 오름차순으로 정렬한 새로운 배열을 반환

// 함수 없이 사용
toSorted()

// 화살표 함수
toSorted((a, b) => { /* … */ })

// 비교 함수
toSorted(compareFn)

// 인라인 비교 함수
toSorted(function compareFn(a, b) { /* … */ })

const months = ["Mar", "Jan", "Feb", "Dec"];
const sortedMonths = months.toSorted();
console.log(sortedMonths); // ['Dec', 'Feb', 'Jan', 'Mar']
console.log(months); // ['Mar', 'Jan', 'Feb', 'Dec']

const values = [1, 10, 21, 2];
const sortedValues = values.toSorted((a, b) => a - b);
console.log(sortedValues); // [1, 2, 10, 21]
console.log(values); // [1, 10, 21, 2]