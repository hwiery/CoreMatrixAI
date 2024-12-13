# CoreMatrix AI

프로덕션 배포 버전입니다.

## 기술 스택
- Next.js
- Node.js
- PM2
- Nginx

## 배포 환경
- AWS EC2
- Ubuntu/Amazon Linux 2

## 설치 및 실행 방법
1. 클론: 
git clone https://github.com/hwiery/CoreMatrixAI.git
2. 의존성 설치: 
npm run build
3. 빌드:
npm run build
4. 실행:
npm start

## 프로덕션 설정
- PORT: 3001
- PM2 사용
- Nginx 리버스 프록시
