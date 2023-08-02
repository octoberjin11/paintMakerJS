const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
);
const color = document.getElementById("color");
const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");

// context(ctx)는 캔버스에 그림을 그릴 때 사용하는 붓이다.
// canvas.getContext 로 불러온 다음 2d를 선택한다. (주의! d 소문자임)
const ctx = canvas.getContext("2d");

// 캔버스 크기 설정
canvas.width = 800;
canvas.height = 800;

// 선 굵기
ctx.lineWidth = lineWidth.value;

let isPainting = false;

// 그림판 만들기
function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
}

function startPainting() {
  isPainting = true;
}

function cancelPainting() {
  isPainting = false;
  ctx.beginPath();
}

function onLineWidthChange(event) {
  const changeLineWidth = event.target.value;
  ctx.lineWidth = changeLineWidth;
}

function onColorChange(event) {
  const changeColor = event.target.value;
  ctx.strokeStyle = changeColor;
  ctx.fillStyle = changeColor;
}

function onColorClick(event) {
  const colorValue = event.target.dataset.color;
  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;
  color.value = colorValue;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting); //마우스 커서가 영역 밖을 벗어났을 때

lineWidth.addEventListener("change", onLineWidthChange); //선 굵기
color.addEventListener("change", onColorChange); //색상 변경
colorOptions.forEach((color) => color.addEventListener("click", onColorClick)); //색상표 클릭
