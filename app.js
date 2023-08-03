const saveBtn = document.getElementById("save");
const textInput = document.getElementById("text");
const fileInput = document.getElementById("file");
const modeBtn = document.getElementById("mode-btn");
const destroyBtn = document.getElementById("destroy-btn");
const eraserBtn = document.getElementById("eraser-btn");
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
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

// 선 굵기
ctx.lineWidth = lineWidth.value;

// 선 스타일
ctx.lineCap = "round";

let isPainting = false;
let isFilling = false;

// 그림판 만들기
function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    if (isFilling) {
      ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
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

function onModeClick() {
  if (isFilling) {
    isFilling = false;
    modeBtn.innerText = "Fill";
  } else {
    isFilling = true;
    modeBtn.innerText = "Draw";
  }
}

function onCanvasClick() {
  if (isFilling) {
    //색 채우기
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
}

function onDestroyClick() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function onEraserClick() {
  ctx.strokeStyle = "white";
  isFilling = false;
  modeBtn.innerText = "Fill";
}

function onFileChange(event) {
  const file = event.target.files[0]; //업로드한 파일을 가져옴
  const url = URL.createObjectURL(file); //file을 가리키는 URL을 요청
  const image = new Image(); //<img src="" alt=""/> 생성
  image.src = url; //image url 설정
  image.onload = function () {
    //이미지가 로딩되면 canvas에 해당 이미지를 그림
    ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    //file input 비움
    fileInput.value = null;
  };
}

function onDoubleClick(event) {
  const text = textInput.value;
  if (text !== "") {
    ctx.save(); //현재 상태(색상, 스타일 등 모든 것)를 저장한다
    ctx.lineWidth = 1;
    ctx.font = "68px 'Press Start 2P'"; //font 지정
    ctx.fillText(text, event.offsetX, event.offsetY);
    ctx.restore(); //저장해뒀던 버전으로 되돌림. 기존의 체크포인트로 돌아감
  }
}

function onSaveClick() {
  const url = canvas.toDataURL(); //캔버스에 그린 그림을 url로 인코딩(변환)
  const a = document.createElement("a"); //a 태그를 생성해 가짜 링크를 생성
  a.href = url; //url 설정
  a.download = "myDrawing.png"; //다운로드 속성 설정, 파일명 설정
  a.click(); //링크 클릭하여 파일 다운로드
}

canvas.addEventListener("dblclick", onDoubleClick);
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting); //마우스 커서가 영역 밖을 벗어났을 때

canvas.addEventListener("click", onCanvasClick);

lineWidth.addEventListener("change", onLineWidthChange); //선 굵기
color.addEventListener("change", onColorChange); //색상 변경
colorOptions.forEach((color) => color.addEventListener("click", onColorClick)); //색상표 클릭
modeBtn.addEventListener("click", onModeClick); //그리기 모드 변경
destroyBtn.addEventListener("click", onDestroyClick); //초기화
eraserBtn.addEventListener("click", onEraserClick); //지우기
fileInput.addEventListener("change", onFileChange);
saveBtn.addEventListener("click", onSaveClick);
