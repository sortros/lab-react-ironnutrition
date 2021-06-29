import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './Components/FoodBox';


function App() {
  return (
    <div>
      {foods.map(food => { 
        return(
          <FoodBox foodInfo={food} />
        )
      })}




    </div>
  );
}

export default App;

