import React from 'react'

class App extends React.Component{
  
  state={
    isLoading:true,
    movies:[],
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({isLoading:false})
    },6000)
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