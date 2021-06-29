import React from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './Components/FoodBox';
import NewFood from './Components/NewFood';

function App() {
  return (
    <div>
      <NewFood/>

      {foods.map(food => { 
        return(
          <FoodBox foodInfo={food} />
        )
      })}




    </div>
  );
}

export default App;

