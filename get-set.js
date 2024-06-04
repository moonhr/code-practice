class KimchiJjigae {
  // 생성자 함수: foodList와 water를 초기화합니다.
  constructor(foodList, water) {
    this.foodList = foodList;
    this.water = water;
  }

  // getter 메서드: foodList를 리턴합니다.
  get foodList() {
    return this._foodList;
  }

  // setter 메서드: foodList를 설정합니다. 배열만 받고, 각 원소는 문자열이어야 합니다.
  set foodList(newFoodList) {
    if (Array.isArray(newFoodList) === false) {
      throw new Error("foodList는 배열이어야 합니다.");
    }
    newFoodList.forEach((item) => {
      if (typeof item !== "string") {
        throw new Error("foodList 배열의 원소는 문자열이어야 합니다.");
      }
      if (item === "통조림참치" || item === "햄") { //둘중 하나라도 포함되면
        throw new Error("김치찌개의 정통성이 무너졌습니다. 다시 작성해주세요.");
      }
    });
    this._foodList = newFoodList;
  }

  //getter 메서드 : water를 리턴합니다.
  get water(){
    return this._water;
  }

  //setter 메서드 : water를 설정합니다. 숫자만 허용합니다.
  set water(newWater) {
    if(typeof newWater !== "number"){
      throw new Error("water는 숫자여야 합니다.");
    }
    this._water = newWater;
  }

  //김치찌개를 만드는 방법을 출력하는 메서드입니다.
  cook() {
    console.log("김치찌개를 만드는 방법")
    console.log("1. 냄비에 물붓")
    console.log("2. 김치 넣넣 돼지 넣넣")
    console.log("3. 두부 넣넣 파 넣넣")
    console.log("4. 소금 고춧가루 팍팍")
    console.log("5. 완성")
  }
}

//재료 리스트와 물의 양을 변수로 선언합니다.
const ingredients = ["김치", "돼지고기" ,"두부", "파"]
const waterAmount = 1000;

//김치찌개 인스턴스를 생성
const myKimchijjigae = new KimchiJjigae(ingredients, waterAmount);

//초기 foodList와 water를 출력
console.log("초기재료 : ", myKimchijjigae.foodList)
console.log("초기 물의 양 : ", myKimchijjigae.water)

//foodList와 water를 변경합니다.
myKimchijjigae.foodList = ["김치", "돼지", "두부", "파", "양파"]
myKimchijjigae.water = 1200

//변경된 foodList와 water를 출력합니다.
console.log("변경된 재료 :" , myKimchijjigae.foodList)
console.log("변경된 물의 양 :", myKimchijjigae.water)

//김치찌개를 만드는 방법을 출력합니다
myKimchijjigae.cook();