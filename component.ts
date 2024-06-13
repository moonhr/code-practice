//* 장보기 리스트
class Shoppinglist {
  //인스턴스 변수 선언
  food: string
  life: string
  snack: string
  constructor(food: string, life: string, snack: string) {
    this.food = food;
    this.life = life;
    this.snack = snack;
  }
}

const component1 = () => {
  //이 함수가 객체라는걸 추론
  let obj1 = new Shoppinglist("감자", "샴푸", "왕밤빵")
  console.log(obj1)

  const decision = () => {
    if (obj1 instanceof Shoppinglist) {
      return `<html>
        <body>
          <div>${obj1.food}</div>
          <div>${obj1.life}</div>
          <div>${obj1.snack}</div>
        </body>
      </html>`;
    } else {
      console.error("에러다!")
    }
  }
  return decision()
}
console.log(component1())


//*  케이크재료
class Cake {
  ingredient: string
  volume: number
  constructor(ingredient: string, volume: number) {
    this.ingredient = ingredient;
    this.volume = volume;
  }
}

const makeCake = (value : string, ml : number) => {
  let cake = new Cake(value, ml)
  const innerFunc = () =>{
    if(value === '밀가루'){
      return `밀가루는 ${cake.volume}가 필요합니다.`
    } else if (value === '우유'){
      return `우유는 ${cake.volume}가 필요합니다.`
    } else {
      return `잘못된 재료를 선택하셨습니다.`
    }
  }
  return `당신은 ${innerFunc()}`;
}

console.log(makeCake("밀가루", 300))
console.log(makeCake("우유", 200))
console.log(makeCake("설탕", 100))

