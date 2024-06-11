//* 배열의 요소를 순회하면서 콜백 함수를 사용하여 원하는 조건에 따라 필터링하는 함수. 필터링된 배열을 반환

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]
