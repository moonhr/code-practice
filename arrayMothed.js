//필요한 모듈을 불러옴.
const http = require('http');

//기초데이터 배열로 선언
const names = ['KDT', '카라비너', '매서드' ,'춘식이'];

//서버생성
const server = http.createServer((req, res) => {
  //배열에서 '카라비너'와 '춘식이'를 제외한 나머지 요소들을 필터링합니다.
  //filter라는 javascript 메서드는 '반복문'중, 조건에 맞는 요소만 남기는 메서드로
  //만약 한글이었다면 '걸러내기'정도의 이름이 되었을 것입니다.

  const filteredNames = names.filter(function(name){
    //'카라비너'와 '춘식이'가 아닌 요소들만 남김
    if(name !== '카라비너'){
      if(name !== '춘식이'){
        return true;
      }
    }
    return false;
  });

  //필터링된 배열을 HTML 형식으로 변환합니다.
  const html = `
    <html>
      <head>
        <title>배열요소의 특정 요소</title>
        <meta charset = "utf-8"
      </head>
      <body>
        <h1>필터링과 매핑</h1>
        <ul>
          ${filteredNames.map(function(name){
            //각 이름을 <li>태그로 감싸서 출력합니다.
            //map이라는 javascript 메서드는 '반복문'중, 각 요소를 변환하는 메서드로
            //만약 한글이었다면 '지도'정도의 이름이었을 것, 마치 이름을 붙이듯 작용한 것을 볼 수 있음
            //map()으로 편리하게 <li>태그로 감싸진 문자열을 생성함
            return '<li>' + name + '</li>';
            //join()으로 배열을 하나의 문자열로 합침 
          }).join('')}
        </ul>
      </body>
    </html>
  `;

  //http 응답의 헤더를 설정하고, html 콘텐츠를 클라이언트 서버에 보냅니다.
  res.writeHead(200, {'content-type':'text/html'});
  res.end(html);
});

server.listen(3000, () => {
  console.log('http://localhost:3000');
});