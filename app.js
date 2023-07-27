const canvas = document.querySelector("canvas");

// context(ctx)는 캔버스에 그림을 그릴 때 사용하는 붓이다.
// canvas.getContext 로 불러온 다음 2d를 선택한다. (주의! d 소문자임)
const ctx = canvas.getContext("2d");

// 캔버스 크기 설정
canvas.width = 800;
canvas.height = 800;

// 사각형 선 그리기
ctx.rect(50, 50, 100, 100);
ctx.rect(150, 150, 100, 100);
ctx.rect(250, 250, 100, 100);
// 위의 코드까지만 작성하면 선의 색이 적용되지 않아서 보이지 않는다.
// 다음 줄에 ctx.stroke() / ctx.fill() 해서 테두리만 그리거나 채울 수 있음.
ctx.fill();

// 끊어가기를 원하는 곳 맨 앞에 ctx.beginPath();추가해 새 경로 만들기.
ctx.beginPath();
ctx.rect(350, 350, 100, 100);
ctx.rect(450, 450, 100, 100);
ctx.fillStyle = "red";
ctx.fill();
