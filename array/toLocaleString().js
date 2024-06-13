// * 배열의 요소를 나타내는 문자열을 반환합니다. 요소는 toLocaleString 메서드를 사용하여 문자열로 변환되고 이 문자열은 locale 고유 문자열(가령 쉼표 ",")에 의해 분리

const array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
const localeString = array1.toLocaleString('en', { timeZone: 'UTC' });

console.log(localeString);
// Expected output: "1,a,12/21/1997, 2:12:00 PM",
// This assumes "en" locale and UTC timezone - your results may vary

var number = 1337;
var date = new Date();
var myArr = [number, date, "foo"];

var str = myArr.toLocaleString();

console.log(str);
// '1337,6.12.2013 19:37:35,foo' 출력(log)
// Europe/Berlin 시간대로 German (de-DE) locale에서 실행하는 경우

//* 배열을 문자열로 출력
