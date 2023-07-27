const canvas = document.querySelector("canvas");

// context(ctx)는 캔버스에 그림을 그릴 때 사용하는 붓이다.
// canvas.getContext 로 불러온 다음 2d를 선택한다. (주의! d 소문자임)
const ctx = canvas.getContext("2d");

// 캔버스 크기 설정
canvas.width = 800;
canvas.height = 800;

// 사각형 채우는 함수 fillRect
// ctx.fillRect(x좌표, y좌표, 넓이, 높이)
ctx.fillRect(50, 50, 100, 200);
