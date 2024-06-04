// Subject : this 사용예제
// Object : this가 가르키는 객체 설명
// Verb : this가 가리키는 객체 속성 설명

// this는 함수가 호출될 때 결정되는 특수한 객체로
// 함수를 호출하는 방법에 따라 this가 가리키는 객체가 달라짐

// 아래의 this는 화살표 함수 내부에서 상위 스코프의 this를 가리킴

const THIS_IS_GLOBAL = global; // 전역 객체 그대로 할당

// 화살표 함수
const second = (a, b) => {
  let local = 1;
  this.value = 200;

  // 변수를 전역스코프를 가져온 것과 같은 결과
  console.log(THIS_IS_GLOBAL);
  console.log("this가 가리키는 이상한 객체 :" + this);

  // 내부 함수 선언 -------------------------
  const inner = () => {
    //화살표 함수의 this는 상위 스코프의 this를 가리킴
    console.log("내부 화살표 함수의 this가 가리키는 객체 :", this);
    //상위 스코프의 this를 가리킴
    console.log("this로 접근한 전역객체 키 :", this.value);
    console.log("전역객체 키 :", THIS_IS_GLOBAL.value);
    //상위 스코프의 this를 가져온 사례 : 올바른 코드
  
    // 아래는 second()함수의 지역변수 lacal을 가져온 것
    // inner() 함수의 입장에서는 지역변수가 아닌, 상위 스코프의 변수처럼 보임
    console.log(local);
  
    return this.value;
  }
  //내부 함수에서 리턴된 값에 a와 b를 더한 값을 리턴
  return inner() + a + b; //200 + a + b
}

const secondExample = second(3, 4);
console.log(secondExample);