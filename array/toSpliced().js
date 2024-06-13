//*  splice()에 대응되는 복사 메서드입니다. 이 메서드는 주어진 인덱스에서 일부 요소가 제거되거나 교체된 새로운 배열을 반환

const months = ["Jan", "Mar", "Apr", "May"];

// 인덱스 1에 요소 추가
const months2 = months.toSpliced(1, 0, "Feb");
console.log(months2); // ["Jan", "Feb", "Mar", "Apr", "May"]

// 인덱스 2부터 2개의 요소 삭제
const months3 = months2.toSpliced(2, 2);
console.log(months3); // ["Jan", "Feb", "May"]

// 인덱스 1의 한 요소를 두 개의 새로운 요소로 교체
const months4 = months3.toSpliced(1, 1, "Feb", "Mar");
console.log(months4); // ["Jan", "Feb", "Mar", "May"]

// 원래 배열은 수정되지 않음
console.log(months); // ["Jan", "Mar", "Apr", "May"]