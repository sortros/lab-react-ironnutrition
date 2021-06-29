import React, { Component } from 'react'
//import foods from './foods.json';

export default class FoodBox extends Component {

    constructor(props) {
        super(props);
        this.state= {
            form:false,
            name:'',
            calories:'',
            image:"",
        }
      }

    deployForm =  () =>{
        this.setState({form:true})
        
   }

   handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

   addNewFood =  () =>{
    this.foods.push(this.state)
    //console.log({foods})
   }

    render(){ 

        return(

            <div>
                {this.state.form === false && <button  onClick={this.deployForm} >New Food</button>}
                {this.state.form === true && 
                    <form >
                    <label for="name">Food name:</label>
                    <input type="text" id="FoodName" name="FoodName" onChange={this.handleChange} />
                    <label for="lname">Calories:</label>
                    <input type="text" id="Calories" name="Calories" onChange={this.handleChange}/>
                    <label for="name">Image:</label>
                    <input type="text" id="Image" name="Image" alt="img" onChange={this.handleChange}/>
                    <input type="submit" onClick={this.addNewFood} value="Submit"/>
                    </form> 

                
                
                }
                
            </div>
           
        )

    }
}