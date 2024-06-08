//태그를 문자열로 조립하는 함수

/**
 * 주어진 태그 이름, 속성 객체, 자식 요소를 받아 HTML 태그 문자열을 생성하는 함수
 * @param {string} tagName - 태그이름
 * @param {Object} attributes - 속성 객체
 * @param {string | string[]} children - 자식 요소 (문자열 또는 문자열로 구성된 배열)
 * @returns {string} - 조립된 HTML 태그 문자열
 */
function tagMaker(tagName, attributes = {}, children = "") {
  // 위 매개변수에 표기된 = 표시는 디폴트 파라미터라는 작성법으로
  // 함수 호출 시 해당 파라미터가 전달되지 않으면 디폴트 값이 사용된다.
  // 즉 첫번째 매개변수인 tagName만 사용해도, 정상적으로 작동한다.

  // 속성을 문자열로 변환하는 헬퍼 함수 => 태그 속성을 만듦
  const attrsTostring = (attrs) => {
    //entries() => 객체를 배열로 변환해주는 메서드 {key : value} => [key, value]
    const attrsArray = Object.entries(attrs);
    //map() => 콜백함수를 실행시켜 새로운 배열을 반환하는 메서드
    const attrsString = attrsArray.map(function (attr) {
      return attr[0] + '="' + attr[1] + '"';
    });

    return attrsString.join(" "); //배열을 문자열로 변환
    // ' '은 속성 사이에 공백을 넣어주기 위함
  }

  //속성 문자열
  const attrsString = attrsTostring(attributes);

  let childrenString;
  if (Array.isArray(children)) {
    childrenString = children.join("");
  } else {
    childrenString = children;
  }

  if (attrsString) {
    return `<${tagName} ${attrsString}>${childrenString}</${tagName}>`;
  } else {
    return `<${tagName}>${childrenString}</${tagName}>`;
  }
}

console.log(
  tagMaker("div", { class: "container", id: "root" }, [
    tagMaker ("h1", {}, "컴포넌트의 힘"),
    tagMaker("p", {}, "우월한 함수의 능력"),
  ])
);

/**
 * <div class="container" id="root">
 *  <h1>컴포넌트의 힘</h1>
 *  <p>우월한 함수의 능력</p>
 * </div>
 */