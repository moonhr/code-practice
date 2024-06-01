const someURL = "/test?name=kongukjae&age=27&city=deajeon";
// * 위 변수는 주소처럼 보이지만, 해석하기 전까진 그저 문자열이다.

//* "?"물음표 표시 이후의 값을 편집해서 객체로 정제하기
function queryStringToObject(url) {
  const text = url.split("?")[1];
  console.log(text);

  const keyValuePairs = text.split("&");
  const obj = {};

  keyValuePairs.forEach((pair) => {
    const keyValue = pair.split("=");
    const key = keyValue[0];
    const value = keyValue[1];
    obj[key] = value;
  });

  console.log(obj);
  return obj;
}

const resultObject = queryStringToObject(someURL);
console.log(resultObject);