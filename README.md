# 박민형 [201840212]

<hr>

## [10/27 9주차 수업 ]

#### 7장 정리 


``` javascript:app.js

import React from 'react'
import axios from 'axios'
import Movie from './movie'
import "./App.css"

class App extends React.Component{
  
  state={
    isLoading:true,
    movies:[],
  }

  getMovies= async ()=>{
    const {
      data:{
        data:{movies},
    },
      } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    // console.log(movies) 데이터 확인용 콘솔
    this.setState({movies,isLoading:false})
    console.log(movies)
  }

  componentDidMount(){
    this.getMovies();
  }

  render(){
    const{ isLoading, movies } = this.state;
    return(
      < section className="container">
        { isLoading ? (
            < div className="loader">
              < span className="loader-text">
                Loading...
              </ span>
            </ div>
          ):(
            < div className="movies">
              {movies.map(movie => (
                < Movie
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                />
              ))}
            </ div>
          )}
      </ section>
    );
  }
}
export default App;
```

<hr>

## [ 10.06 6주차 수업]

#### 05-4 영화 앱 만들기 워밍업

이번 파트에서부터 실질적인 프로젝트 진행을 위해 파일을 처음부터 코딩하기 시작합니다
<pre>
<code>

import React from 'react'

class App extends React.Component{
  
  state={
    isLoading:true, //true->로딩완료 , false->로딩중 을 출력할수있도록
    movies:[],
  }

  componentDidMount(){
    setTimeout(()=>{ // 첫번째 인자로 setTimeout()을 전달
      this.setState({isLoading:false}) //state를 setstate()함수를 활용
    },6000) // 두번째 인자로 6000을 보내어 6초를 대기하도록 전달
  }

  render(){
    const{ isLoading } = this.state; //구조분해 할당을 통하여 this.state에 있는 isloading우선해서 얻으면 this.state를 매번 입력하는 수고를 덜어줄수있다
    return(
      < div>
        {isLoading ? '데이터를 불러오는 중 입니다...':'데이터 불러오기 완료!'}
        // 삼항연산자를 통하여 필요한 문구를 출력하는 영역
      </ div>
    )
  }
}

export default App;

</code>
</pre>

### 6장 본격적으로 영화앱 만들기 
현재까지 진행한 코드

<pre>
<code>
import React from 'react'
import axios from 'axios' // axios 를 사용할수있도록 import

class App extends React.Component{
  
  state={
    isLoading:true,
    movies:[],
  }

  getMovies= async ()=>{
    const {
      data:{
        data:{movies}, // 이곳에서 구조분해할당을 사용하도록 수정
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    console.log(movies)
  }

  componentDidMount(){
    this.getMovies();
  }

  render(){
    const{ isLoading } = this.state;
    return(
      < div>
        {isLoading ? '데이터를 불러오는 중 입니다...':'데이터 불러오기 완료!'}
      </ div>
    )
  }
}

export default App;
</code>
</pre>

await
  -> await 뒷쪽에 있는 axios.get() 함수를 기다리도록 명령
async
  -> 자바스크립트에게 getMovies()함수에게 시간이 필요하다고 알림

<hr>

##  [09.29 5주차 수업]
##### ※ 4주차는 휴강

#### 04-4 음식앱에 prop-types 도입하기

##### prop-types 설치하기

> npm install prop-types

##### package.json 파일 확인

> package.json 파일내부에 dependencies 키안에 값을 살펴보자
"prop-types":"~~~~~~~" 이게 존재한다면 성공


###### ★★ prop-types가 뭐지?
prop types란 컴포넌트가 전달받은 props가 정말 내가 원하는 값인지 확인 해준다
a props를 전달해야되는데 b props를 전달하게되면 오류메세지를 보내주는 기능이다

##### prop-types 적용하기

<code>
// 상단에 import 해주기 <br>
// "Proptypes"는 일종의 객체를 생성하는 개념과 유사해서 변경이 가능함
import Proptypes from 'prop-types';
</code>

##### prop-types 작성하기

<pre>
<code>
Food.prototype={
  name: proptypes.string.isRequired,
  picture: proptypes.string.isRequired,
  rating: proptypes.string.isRequired,
}
</code>
</pre>

해당 코드 삽입후 큰 문제가 발생하지 않겠지만 콘솔창에서 오류가 발생한다
그 이유는 rating의 자료형을 number이지만 여기에서는 string으로 선언해서그렇다
저부분을 number로 변경하면 문제가 해결된다

##### isRequired 알아보기

proptyeps에 마지막 부분에보면 isRequired가 존재하는데 의미는 반드시 필요하다 는 뜻이다
앞에 적힌 형태의 자료형의 값이 반드시 필요하다는 뜻이다 만약 isRequired가 없다면 다른 형태로 와도 문제가 없다는 의미가 된다

### 5장 state 클래스형 컴포넌트

props가 다루지못하는 동적인 데이터를 다룰때 사용합니다

#### 05-1 state로 숫자 증감 기능 만들어보기

<pre>
<code>
import React from 'react'

// 클래스형 컴포넌트가 되기위해서는 해당 클래스가 react가 제공하는 component를 상속받아야됩니다
class App extends React.Component{
  
  state={
    count:0,
  }
  
  // 자바스크립트 혹은 다른언어를 사용하면 ++ 이나 다른 연산자를 사용하겠지만
  // 리엑트에서는 사용이 불가능하다
add=()=>{
  console.log('add');
}

minus=()=>{
  console.log('minus');
}

  render(){
    return(
      < div>
        < h1>THE Number is: {this.state.count}</ h1>
        < button onClick={this.add}>Add</ button>
        < button onClick={this.minus}>Minus</ button>
      </ div>
    )
  }
}

export default App;
</code>
</pre>



#### 05-2 숫자증감기능 제대로 만들기

<pre>
<code>
import React from 'react'

// 클래스형 컴포넌트가 되기위해서는 해당 클래스가 react가 제공하는 component를 상속받아야됩니다
class App extends React.Component{
  
  state={
    count:0,
  }
  

//해당 방법으로도 숫자를 변경하는 방법으로서 가능하지만 일부 성능이 저하되는 현상이 발생할수있으므로 지양하는것이 좋다
add=()=>{
  this.setState(current=>(
      {count:this.state.count + 1
    }))
}

// 해당방법으로 하는것을 권장한다
minus=()=>{
  this.setState(current=>(
    {count:current.count-1
  }))
}

  render(){
    return(
      < div>
        < h1>THE Number is: {this.state.count}</ h1>
        < button onClick={this.add}>Add</ button>
        < button onClick={this.minus}>Minus</ button>
      </ div>
    )
  }
}

export default App;
</code>
</pre>

#### 05-3 클래스형 컴포넌트의 일생 알아보기

<pre>
<code>
import React from 'react'

// 클래스형 컴포넌트가 되기위해서는 해당 클래스가 react가 제공하는 component를 상속받아야됩니다
class App extends React.Component{
  
constructor(props){
  // render 함수보다 먼저 실행되게 된다
    super(props);
    console.log('hello')
  }
  
  state={
    count:0,
  }
  
add=()=>{
  this.setState(current=>(
      {count:current.count+1
    }))
}

minus=()=>{
  this.setState(current=>(
    {count:current.count-1
  }))
}

// render() 함수보다 뒤에 실행된다
componentDidMount(){
  console.log('component rendered')
}

// 해당 함수는 화면이 업데이트 되는 경우에 실행된다
componentDidUpdate(){
  console.log("i' just updated")
}

// 컴포넌트가 종료될때 실행된다
componentWillUnmount(){
  console.log("Good bye, cruel world")
}

  render(){
    console.log("i'm rendering")
    return(
      < div>
        < h1>THE Number is: {this.state.count}</ h1>
        < button onClick={this.add}>Add</ button>
        < button onClick={this.minus}>Minus</ button>
      </ div>
    )
  }
}

export default App;
</code>
</pre>



<hr>

## [09.15 3주차 수업]

#### 03-3 2번째 리액트 기초개념: JSX
>JSX 는 새로운 문법이 아니고 자바스크립트와 HTML 을 섞은 문법입니다

주의점으로는 컴포넌트의 이름은 반드시 대문자로 시작되어야된다는 것입니다

실행시에 INDEX.JS 

<PRE>
<CODE>
ReactDOM.render(
    < App />< 이곳에 추가하면 가능? >,
  document.getElementById('root')
)
</CODE>
</PRE>

저 위치에 자신이 만든 컴포넌트를 연결하면 실행될것 같지만 오류가 발생한다 그이유는
<STRONG>리액트는 실행시에 하나의 컴포넌트만 실행하기에 오류가 발생한다</STRONG>
해결방법으로는 1번 컴포넌트 안에 자신이 만든 2,3번째 컴포넌트를 연결하는 방법이 있다

#### 03-4 세번째 리액트 기초 개념: props

props는 컴포넌트에서 컴포넌트로 전달되는 데이터를 의미한다
매개변수를 활용하여 함수를 효율적으로 이용하는것처럼 props를 이용해서 컴포넌트를 효율적으로 활용할수 있다.

><Food fav="Kimchi"/> 이러한 형태로 props를 건네줄수 있으며
function Food(props){
  return \<h1>I Like {props.fav}! \</h1>
}
{ props.fav } 해당 형태를 통하여 표시할수있음

구조분해 할당을 통하여 점 연산자를 사용하지 않고 사용이 가능합니다
<code>{fav} = props;
    i like {fav}</code>
위 와 같은 형태로 사용할수 있다

### 4장 슈퍼 똑똑하게 컴포넌트 만들기!
#### 유사한 컴포넌트 여러개 만들기
이전에서는 여러개의 컴포넌트를 만들때
<컴포넌트이름 /> <컴포넌트이름 /> <컴포넌트이름 /> 이렇게 만들게 된다 하지만 이렇게 하면 
코드가 지저분하게 되고 만다

#### map() 함수를 활용해서 여러개의 컴포넌트 만들기

<pre>
<code>
function App() {  
  return (
    < div >
      {foodLike.map(dish=>(
        < Food name={dish.name} picture={dish.image} />
      ))}  
    < /div >
  )
}

function Food({name,picture}){
  return (
    < div>
      < h1>I Like {name}!</ h1>
      < img src={picture} alt={name} />
    </ div>
  )
}
</code>
</pre>
> map 함수를 사용하면 배열에 담겨진 원소들이 하나씩 넘어가게 되어 여러개의 컴포넌트를 불러 오지 않고도 여러개의 문장을 불러올수 있다
Food 로 넘어간 배열의 원소들이 화면에 출력되게 된다
#### 음식 앱 이리저리 만지고 고쳐보기
map()함수를 사용할때 
> />warning: Each child in a list should have a unique "key" prop.

와 같은 오류가 콘솔에 출력되는 현상이 있다
유니크 한 "키"가 필요하다는 의미인데 리액트에서는 원소들은 모두 유일함을 가져야되지만 리스트에 담게되면서
그 유일성을 잃어 버린것

<pre>
<code>

const foodLike = [
  {
    id: 1,  <- 원소들에게 각각 고유한 id 값을 넣어준다
    name:"Neng-Myeon",
    image:"https://thejincook.com/upload/menu_01/2019_05_10/hero_6iioG_2019_05_10_16_04_36.jpg"
  },
  {
    id: 2,
    name:"TTek-Bokk-KKi",
    image:"https://t1.daumcdn.net/cfile/tistory/99DDDC445BD839460C"
  },
  {
    id: 3,
    name:"Gan-JJa-Jang",
    image:"http://ojsfile.ohmynews.com/STD_IMG_FILE/2016/1214/IE002069160_STD.jpg"
  }
]

function App() {  
  return (
    < div>
      {foodLike.map(dish=>(
        < Food key={dish.id} name={dish.name} picture={dish.image}/>
      ))}          └key props를 추가해줍니다
    </ div>
  )
}

</code>
</pre>
> 이제 해당 요류는 사라지게 된다

##### ★컴포넌트를 만들때는 대문자로 시작하고  함수는 소문자로 시작한다
<hr>

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

컴포넌트의 정의
<pre>
<code>
function App() {
    return (
        <div>Hello world!!!!!!!!!</div>
    );
}
export default App;
</code>
</pre>
 위와 같은 형태를 컴포넌트를 정의 한다고 할수 있다