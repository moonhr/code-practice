//* 배열의 항목에 특정 값이 포함되어 있는지를 판단하여 적절히 true 또는 false를 반환

const array1 = [1, 2, 3];

console.log(array1.includes(2));
// Expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// Expected output: true

console.log(pets.includes('at'));
// Expected output: false
