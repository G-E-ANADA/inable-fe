# inable-fe

#### 시작하기

```
git clone https://github.com/G-E-ANADA/inable-fe.git
```

```
npm install
npm start
```

#### Build failed 오류 발생시

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

다시 한 번, node_modules와 package-lock.json을 삭제하고 패키지를 재설치합니다:
