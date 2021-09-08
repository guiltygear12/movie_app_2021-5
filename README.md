# 박민형 [201840212]

## [09.08 2주차 수업]

npm start : 리액트 앱 실행하는 명령어

깃허브에 업로드 하기
 > \>git init
 Initialized empty Git respnsitory in 경로
또는
Reinitialized existing Git resitory in 경로

둥중 하나의 문구가 뜨면 성공

create a new repository 에서 깃허브 저징소 생성


#### 리액트앱 만들고 살펴보기


##### 1. 리액트앱 프로젝트 폴더 살펴보기
    1.프로젝트 폴더는 node , modules , public , src 로 이루어져 있다
    2.node_module 폴더는 사용할일이 없다 주로 public,src는 자주 사용함

##### 2. public 폴더 살펴보기
    1. favicon.ico 파일은 제목과 함께 브라우저에 보이는 아이콘
    2. index.html 기본적인 내용만 적혀있다

##### 3.src 폴더 살펴보기
    1. app.css , app.js , app.test.js 등 많은 파일이 존재한다



##### 4. index.js파일수정
    src 폴더에서 정리하고 남은 index.js파일을 수정한다
    수정한 코드


<pre>
<code>
    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './App';
    ReactDOM.render(
    <\App>,
    document.getElementById('root')
    );
</code>
</pre>


##### 5. app.js 수정하기
    index.js 파일을 수정하고 app.js파일도 이어서 수정한다
    
<pre>
<code>
    import React from 'react'; <-최신버전에서는 생략가능

    function App() {
        return <\div className="App" />;
    }
    export default App;
</code>
</pre>
이후 다시 실행해보면 실행은 되지만 백지만 뜨게 된다


### 리액트 동작 원리 살펴보기

작성된 프로젝트 폴더 내부의 코드를 자바스크립트를 이용해서 해석하며 그 결과물을 index.html로 끼워 넣는다

##### 1. index.js 살펴보기

<code>
    ReactDOM.render(<\App />,document.getElementById('root'));
</code>
app 컴포턴트를 아이디가 root 인곳에 뿌려준다 라는 의미로 해석이 가능하다

##### 2. index.html 수정하기
div id를 root 에서 potato 로 바꾼다면
->앱이 실행 되지않는다

##### 3. index.js 수정하여 오류 고치기
getElementById('potato'); 로 고치면 오류가 고쳐진다.

## 3장 리액트 기초 개념 알아보기

### 3장-1 리액트 실행 복습
npm start - 리액트를 실행 할수있다
ctrl + c - cmd,powershell 등에서 실행중인 프로그램을 종료 할수있다



### 3장-2 첫번째 리액트 기초개념: 컴포넌트

### 3장-2 두번째 리액트 기초개념: JSX

### 3장-2 세번째 리액트 기초개념: props