const canvas = document.querySelector("canvas");

// context(ctx)는 캔버스에 그림을 그릴 때 사용하는 붓이다.
// canvas.getContext 로 불러온 다음 2d를 선택한다. (주의! d 소문자임)
const ctx = canvas.getContext("2d");

// 캔버스 크기 설정
canvas.width = 800;
canvas.height = 800;

// 선 굵기
ctx.lineWidth = 2;

// 시작점
let x_coord = 0;
let y_coord = 0;

const colors = [
  "#ff3838",
  "#ffb8b8",
  "#c56cf0",
  "#ff9f1a",
  "#fff200",
  "#32ff7e",
  "#7efff5",
  "#18dcff",
  "#7d5fff",
];

// 그림판 만들기
function cursorMove(event) {
  ctx.beginPath();
  ctx.moveTo(x_coord, y_coord);
  const color = colors[Math.floor(Math.random() * colors.length)];
  ctx.strokeStyle = color;
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
}

function onClick(event) {
  x_coord = event.offsetX;
  y_coord = event.offsetY;
}

canvas.addEventListener("mousemove", cursorMove);
canvas.addEventListener("click", onClick);
