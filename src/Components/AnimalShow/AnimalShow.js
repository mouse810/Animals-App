import './AnimalShow.css'
import { useState } from 'react'
import cat from '../../img/cat.jpg'
import cow from '../../img/cow.jpg'
import dog from '../../img/dog.jpg'
import gator from '../../img/gator.jpg'
import horse from '../../img/horse.jpg'
import bull from '../../img/bull.jpg'
import fox from '../../img/fox.jpg'
import lion from '../../img/lion.jpg'
import heart from '../../img/heart.png'


const svgMap = { bull, cat, cow, dog, fox, gator, horse, lion, heart }
const AnimalShow = ({ type }) => {
     const [clicks, setClicks] = useState(0);

     const handleClicks = () => {
          setClicks(clicks + 1)
     };

     return (
          <div className='animal-show' onClick={handleClicks}>
               {/* <h2>{type}</h2> */}
               <img className='animals' src={svgMap[type]} alt="animals" />
               <img className='heart' src={heart} alt="Heart_Img" style={{ width: 10 + 10 * clicks + 'px' }} />
          </div>
     )
}

export default AnimalShow
