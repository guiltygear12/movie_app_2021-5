import proptypes from "prop-types"

const foodLike = [
  {
    id: 1,
    name:"Neng-Myeon",
    image:"https://thejincook.com/upload/menu_01/2019_05_10/hero_6iioG_2019_05_10_16_04_36.jpg",
    rating:5.0
  },
  {
    id: 2,
    name:"TTek-Bokk-KKi",
    image:"https://t1.daumcdn.net/cfile/tistory/99DDDC445BD839460C",
    rating:4.8
  },
  {
    id: 3,
    name:"Gan-JJa-Jang",
    image:"http://ojsfile.ohmynews.com/STD_IMG_FILE/2016/1214/IE002069160_STD.jpg",
    rating:4.5
  }
]

function App() {  
  return (
    <div>
      {foodLike.map(dish=>(
        <Food 
        key={dish.id} 
        name={dish.name} 
        picture={dish.image}
        rating={dish.rating}
        />
      ))}  
    </div>
  )
}

function Food({name,picture,rating}){
  return (
    <div>
      <h1>I Like {name}!</h1>
      <h4>rating: {rating}/5.0 point!</h4>
      <img src={picture} alt={name} />
    </div>
  )
}

Food.prototype={
  name: proptypes.string.isRequired,
  picture: proptypes.string.isRequired,
  rating: proptypes.string.isRequired,
}

export default App
