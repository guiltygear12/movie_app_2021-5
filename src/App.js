import {Component} from 'react'

class App extends Component{
  constructor(props){
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

componentDidMount(){
  console.log('component rendered')
}
componentDidUpdate(){
  console.log("i' just updated")
}
componentWillUnmount(){
  console.log("Good bye, cruel world")
}

  render(){
    console.log("i'm rendering")
    return(
      <div>
        <h1>THE Number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

export default App;