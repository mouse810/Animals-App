import React, { useState } from 'react';
import AnimalShow from './Components/AnimalShow/AnimalShow';
import './App.css'

const getRandomAnimals = () => {
  const animals = ['horse', 'dog', 'cat', 'cow', 'lion', 'gator','bull','fox'];

  return animals[Math.floor(Math.random() * animals.length)];
}

const App = () => {
  const [animals, setAnimals] = useState([]);


  const handleClick = () => {
    setAnimals([...animals, getRandomAnimals()])
  }

  const renderAnimals = animals.map((animals, index) => {
    return <AnimalShow type={animals} key={index} />
  })
  console.log(renderAnimals);

  return (
    <div className='app'>

      <button onClick={handleClick}>Add Animals!</button>
      <div className='animal-list'>{renderAnimals}</div>

    </div>
  )
}

export default App