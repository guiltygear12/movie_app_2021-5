import React from 'react'
import axios from 'axios'

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
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    console.log(movies)
  }

  componentDidMount(){
    this.getMovies();
  }

  render(){
    const{ isLoading } = this.state;
    return(
      <div>
        {isLoading ? '데이터를 불러오는 중 입니다...':'데이터 불러오기 완료!'}
      </div>
    )
  }
}

export default App;