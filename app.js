const canvas = document.querySelector("canvas");

// context(ctx)는 캔버스에 그림을 그릴 때 사용하는 붓이다.
// canvas.getContext 로 불러온 다음 2d를 선택한다. (주의! d 소문자임)
const ctx = canvas.getContext("2d");

// 캔버스 크기 설정
canvas.width = 800;
canvas.height = 800;

/*
moveTo(x, y); -> 브러쉬의 좌표를 움직여줌
lineTo(x, y) -> 라인을 그려줌

- 수평인 직선을 그리려면 두 y값이 같아야 한다
- 라인이 끝난 점이 다음에 시작하는 브러쉬 좌표이다
- 정리하자면 fillRect = fill+Rect = fill + (moveTo+lineTo)
*/

ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
ctx.lineTo(150, 150);
ctx.lineTo(50, 150);
ctx.lineTo(50, 50);
ctx.fill();
