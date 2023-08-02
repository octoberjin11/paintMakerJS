const canvas = document.querySelector("canvas");

// context(ctx)는 캔버스에 그림을 그릴 때 사용하는 붓이다.
// canvas.getContext 로 불러온 다음 2d를 선택한다. (주의! d 소문자임)
const ctx = canvas.getContext("2d");

// 캔버스 크기 설정
canvas.width = 800;
canvas.height = 800;

// 사람 그리기
ctx.fillRect(210 - 40, 200 - 30, 15, 100); //왼팔
ctx.fillRect(350 - 40, 200 - 30, 15, 100); //오른팔
ctx.fillRect(260 - 40, 200 - 30, 60, 200); //몸통

ctx.arc(250, 100, 50, 0, 2 * Math.PI); //열굴
ctx.fill();

ctx.beginPath(); //색이 다른 path를 만들어주기 위해 새로운 path를 만들어줌.
ctx.fillStyle = "white";
ctx.arc(260 + 10, 80, 8, Math.PI, 2 * Math.PI);
ctx.arc(220 + 10, 80, 8, Math.PI, 2 * Math.PI);
ctx.fill();
