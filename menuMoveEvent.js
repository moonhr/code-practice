//문서 식별
//html 문서 어딘가에 있는 메뉴와 토글버튼
const menu = document.getElementById("menu");
const toggleButton = document.getElementById('menu-toggle');

// 기초 설정 변수들
const menuwidth = 250;
const slideStep = 10;
const intervalTime = 16; // 60fps
const closedPosition = - (menuwidth);
const openPosition = 0;

// ★★ 상태 변수들 ★★
let isOpen = false;
let interval;

// 예제 항수
function slideMenu(open) {
  // 현재 메뉴의 위치를 가져와서 정수로 변환
  let currentPosition = parseInt(menu.style.left, 10);
  // 타겟위치와 한 번에 이동할 거리들 설정
  let targetPosition;
  // 한번에 이동할 거리들 설정
  let step;

  // 현재 메뉴가 열려있는지 닫혀있는지에 따라 targetPosition과 step을 설정
  if (open) {
    targetPosition = openPosition;
    step = slideStep;
  } else {
    targetPosition = closedPosition;
    step = -slideStep;
  }
  // 함수 실행 중인 경우 중지시키기 위해 먼저 clearinterval을 호출
  clearInterval(interval);

  interval = setInterval(() => {
    if (open === true) {
      if (currentPosition >= targetPosition) {
        clearInterval(interval);
        menu.style.left = targetPosition + 'px';
        return; //함수 종료를 위한 return
      }
    } else {
      if (currentPosition <= targetPosition) {
        clearInterval(interval);
        menu.style.left = targetPosition + 'px';
        return;
      }
    }

    // 현재 메뉴의 위치를 업데이트 하는 과정으로 
    // 지속적으로 누적하여 이동할 거리를 더 해주는 방식
    currentPosition += step;

    menu.style.left = currentPosition + 'px';

  }, intervalTime);
}

// 이벤트 실행 함수
toggleButton.addEventListener('click', () => {
  if (isOpen === true) {
    isOpen = false;
    slideMenu(false);
  } else {
    isOpen = true;
    slideMenu(true);
  }
});