// * 지정된 배열 및 그 요소를 나타내는 문자열을 반환

const array1 = [1, 2, 'a', '1a'];

console.log(array1.toString());
// Expected output: "1,2,a,1a"


var monthNames = ["Jan", "Feb", "Mar", "Apr"];
var myVar = monthNames.toString(); // 'Jan,Feb,Mar,Apr'을 myVar에 할당.

// * toString() 과 toLocaleString() 메서드 의 주요 차이점은 toString()은 값을 기본 형식의 문자열로 변환하는 반면 toLocaleString()은 값을 특정 형식의 문자열로 변환한다는 것입니다.