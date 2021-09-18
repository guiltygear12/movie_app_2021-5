
const foodLike = [
  {
    id: 1,
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
    <div>
      {foodLike.map(dish=>(
        <Food key={dish.id} name={dish.name} picture={dish.image}/>
      ))}  
    </div>
  )
}

function Food({name,picture}){
  return (
    <div>
      <h1>I Like {name}!</h1>
      <img src={picture} alt={name} />
    </div>
  )
}



export default App
