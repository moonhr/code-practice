//미남이거나 꽃미남이거나 둘중 한가지만 허락하는 JobType이라는 타입 정의
type JobType = '꽃미남' | '미남';

//인터페이스는 마치 답정너와 같은 역할

//kongukjae 인터페이스를 정의
interface kongukjae {
  name : string;
  age : number;
  job : JobType; //job속성을 JobType으로 정의
}

//? getRandomJob함수를 정의하여 Jobtype값을 무작위로 반환하는 함수이지만,
//? 위에 선언된 Jobtype때문에 예상을 벗어나는 값은 반환되지 않는 진실.
function getRandomJob(): JobType{
  const jobs: JobType[] = ["꽃미남", "미남"];
  //실제값을 이렇게 넣는 경우는 없지만 이해를 돕기 위한 작성
  //job배열은 Jobtype으로만 구성된 배열을 뜻함
  const randomIndex:number = Math.floor(Math.random() * jobs.length);
  return jobs[randomIndex];
}

//4. minamTruth 함수를 정의합니다.
function minamTruth(): kongukjae{
  const person : kongukjae = {
    name:'공욱재',
    age: 26,
    job: getRandomJob() //job속성에 무작위로 선택된 값을 할당
    //그래봐야 값은 정해져있다.
  };
  //kongukjae라는 정해진 인터페이스 값을 리턴할 수 밖에 없다.
  return person;
}

const result = minamTruth();
//위 함수 return은 kongukjae인 것은 변함없으므로,
//호출만 확인해도 대략적인 결과를 '추론'할 수 있다.
console.log(result);