function isIntegerCheck(value: number): boolean{
  let checkValue : boolean = Number.isInteger(value);
  return checkValue;
}

//아래 함수 선언부에서 '함수'가 무엇을 입력하고 출력하는지 한눈에 알아볼 수 있다.
function add (a:number, b:number):number{
  if(isIntegerCheck(a)===false || isIntegerCheck(b)===false){
    throw new Error("매개변수 둘 중 하나라도 정수가 아니라면 에러를 발생시키기");
  }
  let result:number = a+b;
  return result
}

//실행부분
try {
  const result: number = add(2,3);
  console.log(result);

  //의도하지 않은 인자타입을 전달하면 컴파일 타임에 오류가 발생
  //const resultWithString :number = (2,'3');
  //오류: Argument of type 'string' is not assignable to parameter of type 'number'.

  //소수의 값을 전달하면 의도하지 않았음으로 에러 발생 
  // const resultWithString:number = add (2, 3);
  // console.log(resultWithString);
} catch (error) {
  //error 객체의 타입을 좁히는 과정이 필요
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error("Unknown error", error);
  }
}