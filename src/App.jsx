import React,{Fragment, useState} from 'react'
import './App.css'
import Usefetch from './useFetch'
/*'https://api.github.com/users'*/ 
function App() {
const[input,setInput]=useState("");
const {data,error,loading}=Usefetch('https://dummyjson.com/recipes');


if(data.recipes){
  const filteredData=data.recipes.filter((ele,idx)=>{
    return ele.name.toLowerCase().includes(input.toLowerCase());
  })
  console.log(filteredData);


  return (
    <>
    <input value={input} type='text' placeholder='Search recipe' onChange={(e)=>setInput(e.target.value)} />
    <div id='main-container'>
    {loading?<div id='loading'>Loading...</div>:<Fragment>{filteredData?filteredData.map((ele,idx)=>{
        return(
          <div key={idx} id='cards'>
            <div id='top-div'> 
            <img src={ele.image} id='card-img'></img>
            <div id='card-name'>{ele.name}</div>
            </div>
            <div id='bottom-div'>
            <div id='data-ingredients'><b>Ingredients:</b>{ele.ingredients}</div>
            <div id='data-instructions'><b>Instructions:</b>{ele.instructions}</div>
            </div>
          </div>
        )
      }):<p>No items Available.</p>}
      
     </Fragment>}
    </div>
   
    
    </>
  )
}
}
export default App;
