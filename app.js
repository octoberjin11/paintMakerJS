const canvas = document.querySelector("canvas");

// context(ctx)는 캔버스에 그림을 그릴 때 사용하는 붓이다.
// canvas.getContext 로 불러온 다음 2d를 선택한다. (주의! d 소문자임)
const ctx = canvas.getContext("2d");

// 캔버스 크기 설정
canvas.width = 800;
canvas.height = 800;

// 집 만들기
ctx.fillRect(200, 200, 50, 200); //왼쪽 벽 만들기
ctx.fillRect(400, 200, 50, 200); //오른쪽 벽 만들기
// ctx.lineWidth = 2; //선 굵기 조절
// ctx.strokeRect(300, 300, 50, 100); //문 만들기. strokeRect()는 선만 그려주고 채워주지 않는.
ctx.fillRect(300, 300, 50, 100); //문 만들기
ctx.fillRect(200, 200, 200, 20); //천장 만들기
ctx.moveTo(200, 200); // 지붕 만들기 위해 연필(좌표) 이동
ctx.lineTo(325, 100);
ctx.lineTo(450, 200);
ctx.fill();
