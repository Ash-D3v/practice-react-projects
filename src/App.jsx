import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Accordian from './components/accodian'
// import RandomColor from './components/random_colour'
// import StarRating from './components/star_rat'
// import Image_slider from './components/image_slider'
import Load_more from './components/load_more'

function App() {
  return(
  //   <div className='App'> 
  //   <Accordian/>
  // </div>
  // <div>
  //   <RandomColor/>
  // </div>
  // <div>
  //   <StarRating noOfStart={10}/>
  // </div>
  // <div>
  //   <Image_slider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'}/>
  // </div>
  <div>
    <Load_more/>
  </div>
  )
}

export default App
