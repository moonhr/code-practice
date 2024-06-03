// Subject : this 사용예제
// Object : this가 가르키는 객체 설명
// Verb : this가 가리키는 객체 속성 설명

// this는 함수가 호출될 때 결정되는 특수한 객체로
// 함수를 호출하는 방법에 따라 this가 가리키는 객체가 달라짐

// 아래의 this는 속절없이 전역 개체를 가리키는데
// 함수선언문으로 선언된 함수는 기본적으로 전역 객체를 타ㅋ겟으로 하는 특성

const THIS_IS_GLOBAL = global; // 전역 객체 그대로 할당

// 일반 함수 선언문
function first(a, b) {
  let local = 1;
  this.value = 100;

  // 변수를 전역스코프를 가져온 것과 같은 결과
  console.log(THIS_IS_GLOBAL);
  console.log("this가 가리키는 이상한 객체 :" + this);

  // 내부 함수 선언 -------------------------
  function inner(){
    console.log("this로 접근한 전역객체 키 :", this.value);
    console.log("전역객체 키 :", THIS_IS_GLOBAL.value);
    // inner() 함수의 지역변수 value를 가져온 것이 아닌,
    // 전역 객체의 value를 가져온 사례 : 상당히 위험
  
    // 아래는 first()함수의 지역변수 lacal을 가져온 것
    // inner() 함수의 입장에서는 지역변수가 아닌, 전역변수처럼 보임
    console.log(local);
  
    return this.value;
  }
  //내부 함수에서 리턴된 값에 a와 b를 더한 값을 리턴
  return inner() + a + b; //100 + a + b
}

const firstExample = first(1, 2);
console.log(firstExample);