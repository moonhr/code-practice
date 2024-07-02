const a = 1;
const b = 1;
console.log(a === b);
const c = [1]; // ? 변수 c의 인덱스 0 번째는
const d = [1];
console.log(c[0] === d[0]);
console.log(c === d);
//객체와 배열은 레퍼런스 타입이다(주소의 위치가 다르다)
//원시타입 참조타입

const e = [1, '콜라', true];
//재할당의 폐해 
e[1] = '포카리스웨트';
console.log(e);
//멋대로 할당하면 곤란할때가 있다
console.log(`나는 콜라가 좋아${e[1]}`);

//=> 복사할 수는 없을까?
const f = e;
console.log(f);
//객체와 배열은 메모리에서 '주소'를 담는 규칙으로 복잡한 데이터를 해결하고 있는데,
//이때 주소 자체의 '위치차이'때문에 같은 객체, 배열처럼 보여도 '다르다'고 판단되어야만 한다.
//자바스크립트 언어에서 객체 배열을 '복사'하는 방식 두가지를 채택했다.
//얕은복사(shallow copy) : 같은 주소인데 부르는 이름만 다른경우 (like 지번주소, 도로명주소)
//깊은복사 : 특정 주소데이터를 그대로 복사해서 '다르게'사용(원본을 파괴하지 않음)