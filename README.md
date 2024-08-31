### 👩‍👧‍👧 Our Team

|                                                                     **🍀 [노우영](https://github.com/norunaru)**                                                                     |                                                                 **🍀 [정채린](https://github.com/chaerin-77)**                                                                 |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                                  FrontEnd Developer                                                                                  |                                                                               FrontEnd Developer                                                                               |
| 프로젝트 세팅<br /> 프로젝트 초기 구조 구축 <br /> 계좌 및 목표 관리 기능명세서 작성<br /> 활용 가능 금융 API 조사 <br /> 반려 동물에게 투자하기/ 캐시워크/반려 동물 보험 뷰 뷰 개발 | 프로젝트 셋팅<br/> API 명세서 작성<br/>github 초기 구조 구축 <br/> 와이어프레임 작성<br/> 화면 설계서<br/> 발표 자료 제작<br/> 홈/마이페이지/회원가입/내 계좌 송금하기 뷰 개발 |

## 배포 주소

> **개발 버전** : [https://moneynyang.site/](https://moneynyang.site/)

## 필수 요구 사항

- Node.js (v14 이상)
- npm 또는 yarn

## 시작하기

### 1. 저장소 클론

먼저, 이 저장소를 클론합니다:

```bash
git clone https://github.com/Team-Daengnyang/moneynyang-client.git

# 디렉토리 이동 :
cd repository-name
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 개발 서버 실행

개발 모드에서 프로젝트를 실행하려면 다음 명령어를 사용합니다:

```bash
npm run dev
```

### 4. 프로덕션 빌드

배포할 수 있는 정적 파일을 빌드하려면 다음 명령어를 사용하세요:

```bash
npm run build
```

## Stacks 🐈

### Environment

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)

### Config

![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

### Development

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-18181B?style=for-the-badge&logo=zustand&logoColor=white)
![React Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

### Communication

![Mattermost](https://img.shields.io/badge/Mattermost-0058CC?style=for-the-badge&logo=Mattermost&logoColor=white)
![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)

### 📖 Directory

```
src
├── api
├── assets
│   ├── Invest
│   ├── Login
│   ├── Main
│   ├── Mypage
│   ├── Navbar
│   ├── Signup
│   ├── bankLogo
│   ├── icons
│   ├── images
│   └── insuranceLogo
├── components
│   ├── Button
│   ├── Card
│   ├── Navbar
│   ├── Routing
│   └── Topbar
├── fonts
├── pages
│   ├── Account
│   ├── CashWalk
│   ├── ChatBot
│   ├── Login
│   ├── Main
│   ├── Mypage
│   │   └── components
│   ├── Payment
│   ├── Signup
│   ├── insurance
│   └── investPet
├── routes
├── store
└── utils
```

### ✉️ Commit Messge Rules

**댕냥이** 들의 **Git Commit Message Rules**

- 반영사항을 바로 확인할 수 있도록 작은 기능 하나라도 구현되면 커밋을 권장합니다.
- 기능 구현이 완벽하지 않을 땐, 각자 브랜치에 커밋을 해주세요.

### 📌 Commit Convention

**[태그] 제목의 형태**

| 태그 이름 |                       설명                        |
| :-------: | :-----------------------------------------------: |
|   FEAT    |             새로운 기능을 추가할 경우             |
|    FIX    |                 버그를 고친 경우                  |
|   CHORE   |                    짜잘한 수정                    |
|   DOCS    |                     문서 수정                     |
|   INIT    |                     초기 설정                     |
|   TEST    |      테스트 코드, 리펙토링 테스트 코드 추가       |
|  RENAME   | 파일 혹은 폴더명을 수정하거나 옮기는 작업인 경우  |
|   STYLE   | 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우 |
| REFACTOR  |                   코드 리팩토링                   |

### **커밋 타입**

- `[태그] 설명` 형식으로 커밋 메시지를 작성합니다.
- 태그는 영어를 쓰고 대문자로 작성합니다.

예시 >

```
  [FEAT] 검색 api 추가
```

### **💻 Github mangement**

**댕냥이** 들의 WorkFlow : **Gitflow Workflow**

- Develop, Feature, Hotfix 브랜치

- 개발(develop): 기능들의 통합 브랜치

- 기능 단위 개발(feature): 기능 단위 브랜치

- 버그 수정 및 갑작스런 수정(hotfix): 수정 사항 발생 시 브랜치

- 개발 브랜치 아래 기능별 브랜치를 만들어 작성합니다.

### ✍🏻 Code Convention

#### Code

하나의 컴포넌트(component) 길이를 100줄 이내로 제한합니다.
const, let을 사용합니다. (var 사용 금지)

#### 네이밍은 아래와 같이 정의합니다.

#### 상수

- 상수는 영문 대문자, 스네이크 표기법을 사용

```
const BASE_URL = "~~~";
```

#### 변수, 함수명

- 카멜케이스 사용

```
//boolean 타입 저장 변수는 앞에 is 붙이기
const isLoading = false;

const getEnginList = () => {...}
```

#### 블록 구문

- 한 줄짜리 블록일 경우라도 {}를 생략하지 않고, 명확히 줄 바꿈 하여 사용한다

```
// bad
if(true) return 'hello'

// good
if(true){
  return 'hello'
}
```

#### 컴포넌트

- 파스칼 케이스로 작성

```
Header.js
Footer.jsx
Home.jsx
...
```

#### Non-components

- 카멜케이스

```
myUtilityFile.js cookieHelper.js fetchApi.js
```

#### 함수 선언

- 함수 표현식과 화살표 함수를 사용합니다.

```
const handleClick = () => {
  console.log('Clicked');
};
```

### 📍 Gitflow 규칙

- Develop에 직접적인 commit, push는 금지합니다.
- 커밋 메세지는 다른 사람들이 봐도 이해할 수 있게 써주세요.
- 작업 이전에 issue 작성 후 pullrequest 와 issue를 연동해 주세요.
- 풀리퀘스트를 통해 코드 리뷰를 전원이 코드리뷰를 진행합니다.
- 기능 개발 시 개발 브랜치에서 feature/기능 으로 브랜치를 파서 관리합니다.
- feature 자세한 기능 한 가지를 담당하며, 기능 개발이 완료되면 각자의 브랜치로 Pull Request를 보냅니다.
- 각자가 기간 동안 맡은 역할을 전부 수행하면, 각자 브랜치에서 develop브랜치로 Pull Request를 보냅니다.  
  **develop 브랜치로의 Pull Request는 상대방의 코드리뷰 후에 merge할 수 있습니다.**

### ❗️ branch naming convention

- develop
- feature/issue_number
- fix/issue_number
- release/version_number
- hotfix/issue_number

예시 >

```
  feature/#3
```

### 📋 Code Review Convention

- P1: 꼭 반영해주세요 (Request changes)
- P2: 적극적으로 고려해주세요 (Request changes)
- P3: 웬만하면 반영해 주세요 (Comment)
- P4: 반영해도 좋고 넘어가도 좋습니다 (Approve)
- P5: 그냥 사소한 의견입니다 (Approve)
