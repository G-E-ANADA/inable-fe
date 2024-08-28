# inable-fe

inable 프로젝트의 프론트엔드 애플리케이션 레포입니다.

inable 프로젝트는 장애인을 위한 구인구직 서비스로, React와 TypeScript를 기반으로 구축되었습니다. 이 애플리케이션은 장애인을 위한 접근성 높은 구인구직 플랫폼을 제공하는 것을 목표로 합니다.

## 프로젝트 디렉토리 구조

```
inable-fe/
├── node_modules/
├── .parcel-cache/
├── src/
│   ├── api/
│   ├── asset/
│   ├── components/
│   ├── css/
│   ├── entities/
│   ├── hooks/
│   ├── pages/
│   ├── store/
│   ├── types/
│   ├── App.tsx
│   ├── index.html
│   ├── index.tsx
│   └── theme.js
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## 설치 및 실행

### 1. 사전 요구사항

- Node.js (최소 버전 14.x)
- npm 또는 Yarn 패키지 관리자

### 2. 환경 변수 설정

`.env` 파일을 프로젝트 루트에 생성하고, 아래와 같은 내용을 추가하세요:

```bash
# 네이버 API 키
NAVER_CLIENT_ID= "발급받은 NAVER_CLIENT_ID"
NAVER_CLIENT_SECRET= "발급받은 NAVER_CLIENT_SECRET"

# AI API 엔드포인트
REACT_APP_AI_API=http://15.165.197.234:8000

# AUTH API 엔드포인트
REACT_APP_AUTH_API=http://15.165.197.234
```

NAVER_CLIENT_ID와 NAVER_CLIENT_SECRET는 네이버 개발자 센터에서 발급받은 키로 대체하세요. REACT_APP_AI_API와 REACT_APP_AUTH_API는 백엔드 서버의 주소를 나타내며, 필요에 따라 수정 가능합니다.

### 3. 의존성 설치

프로젝트를 설치하려면 다음 명령을 실행하세요:

```bash
git clone https://github.com/G-E-ANADA/inable-fe.git
cd inable-fe
npm install
```

### 4. 애플리케이션 실행

아래 명령어를 통해 개발 서버를 시작하세요:

```bash
npm start
```

이 명령어는 Parcel을 사용하여 개발 서버를 실행하며, 기본 브라우저에서 애플리케이션을 자동으로 열립니다.

#### 참고. Build failed 오류 발생시

```
🚨 Build failed.
Error: Expected content key 37a1035e8011b3a1 to exist
  Error: Expected content key 37a1035e8011b3a1 to exist
```

**1. Parcel 캐시 수동 삭제**

```
rm -rf .parcel-cache
```

Parcel의 캐시 디렉토리를 수동으로 삭제해보세요. 보통 프로젝트 루트 디렉토리에 .parcel-cache 디렉토리가 있습니다. 이를 삭제합니다:

**2. node_modules 및 package-lock.json 삭제 후 재설치**

```
rm -rf node_modules package-lock.json
npm install
npm start
```

다시 한 번, node_modules와 package-lock.json을 삭제하고 패키지를 재설치합니다.

### 라이선스

이 프로젝트는 MIT 라이선스에 따라 배포됩니다. 자유롭게 사용, 수정, 배포할 수 있으며, 원작자에 대한 언급은 유지해야 합니다.
