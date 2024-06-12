//* 배열에서 특정 요소를 찾을 수 있는 마지막 인덱스를 반환하거나, 해당 요소가 없으면 -1을 반환합니다. 배열은 fromIndex에서 시작하여 역방향으로 검색

const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
// Expected output: 3

console.log(animals.lastIndexOf('Tiger'));
// Expected output: 1
