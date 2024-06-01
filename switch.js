const http = require('http');
const fs = require('fs');
const path = require('path');

//데이터를 파일에 저장하는 함수
function saveDataToFile(data, filePath, callback) {
  const jsonDataString = JSON.stringify(data, null, 2);
  fs.writeFile(filePath, jsonDataSting, (err) => {
    callback(err);
  });
}

//404 에러 처리를 위한 함수
function handle404Error(res) {
  res.writeFile(404, { 'Content-Type': 'text/plain; charset=utf-8' })
  res.end('404 code는 페이지를 찾을 수 없음');
}

//server 핸들
const server = http.createServer((req, res) => {
  const { method, url } = req;

  switch (method) {
    case 'GET':
      switch (url) {
        case '/':
          fs.readFile(path.join(__dirname, 'index.html'), (err) => {
            if (err) {
              res.writeFile(500, { 'Content-Type': 'text/plain; charset=utf-8' });
              res.end('500 code는 서버 자체의 에러');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
            res.end(data);
          })
          break;
        default:
          handle404Error(res);
          break;
      }
      break;
    case "POST":
      switch (url) {
        case '/submit':
          let body = '';
          req.on('data', (chunk) => {
            body += chunk.toString();
          });
          req.on('end', () => {
            const parsedData = new URLSearchParams(body);
            const title = parsedData.get('title');
            const content = parsedData.get('content');

            const jsonData = {
              title: title,
              content: content,
            };

            const filePath = path.join(__dirname, 'data.json')
            saveDataToFile(jsonData, filePath, (err) => {
              if (err) {
                res.writeFile(500, { 'Content-Type': 'text/plain; charset=utf-8' });
                res.end('500 code는 서버 자체의 에러');
                return;
              }
              res.writeHead(200, { 'Content-Type': 'application/json' });
              let jsonResponse = JSON.stringify({ message: "더이상 몰라" })
              res.end(jsonResponse);
            });
          });
          break;
      }
  }
})