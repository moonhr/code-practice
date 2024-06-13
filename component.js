class ShoppingList {
  constructor(food, life, snack) {
    this.food = food;
    this.life = life;
    this.snack = snack;
  }
}

const component = () => {
  //이 함수가 객체라는걸 추론
  let obj = new ShoppingList("감자", "샴푸", "왕밤빵")
  console.log(obj)
}
console.log(component())

