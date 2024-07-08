// 운세 목록
const fortunes = [
  "마음속에 담아두고 있는 일이 있다면 먼저 말을 건네보세요.",
  "오늘은 푹 쉬는 게 좋겠어요.",
  "오늘은 새로운 일이 찾아올 것 같네요.",
  "좋은 소식이 찾아올 것 같네요.",
  "오늘은 새로운 일에 도전해 보는 게 좋겠어요.",
  "오늘은 가족과 함께 해보세요.",
  "가장 중요한 한 가지에 집중해 보세요.",
  "과거의 일은 흘려보내세요.",
  "오늘은 취미생활을 해보세요.",
  "다른 사람과의 협업을 해보세요."
];

// 랜덤한 운세를 선택하는 함수
function getFortune() {
  return fortunes[Math.floor(Math.random() * fortunes.length)];
}

// 운세를 보여주는 함수
function showFortune() {
  var fortune = getFortune();

  // SweetAlert2 모달로 운세 보여주기
  Swal.fire({
    title: '오늘의 운세',
    text: fortune,
    icon: 'info',
    confirmButtonText: '확인'
  });
}

// 버튼 클릭 시 운세 보기 이벤트 리스너 추가
var generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", showFortune);
