class MyRoom{
  constructor(book, makeup,bed){
    this.desk1 = book;
    this.desk2 = makeup;
    this.deskAll = () => {
      return `${this.desk1}과 ${this.desk2}`
    }
    this.sleep = bed
  }

  set desk1(value){
    if(typeof(value)==='string'){
      this._desk1=value;
    }else{
      throw new Error("문자열이 아닙니다.")
    }
  }
  get desk1(){
    return this._desk1;
  }

  set desk2(value){
    if(typeof(value)==='string'){
      this._desk2=value;
    }else{
      throw new Error("문자열이 아닙니다.")
    }
  }
  get desk2(){
    return this._desk2;
  }

  set sleep(value){
    if(typeof(value)==='string'){
      this._sleep=value
    }
  }
  get sleep(){
    return this._sleep+"가 있습니다."
  }
}

const callRoom = (value) => {
  const myRoom = new MyRoom(value,'거울','침대');
  const helpFunc = () =>{
    if(value==='딥다이브'){
      return `학구열이 높은 사람이네요. 책상에 ${myRoom.desk1}이 있다니..`
    }else{
      return `${myRoom.desk1}은(는) 만화책은 아니겠죠?`
    }
  }
  return `당신의 방을 볼까요? 책상과 ${myRoom.sleep} 책상을 한번 봐볼까요?
당신의 책상에는 ${myRoom.deskAll()}이 있습니다.
당신은 ${helpFunc()}
`
}
console.log(callRoom('딥다이브'))