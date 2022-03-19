import React,{useEffect,useState} from 'react';
import './Recipe.css';
import axios from 'axios';
import Recipe from './Recipe';
import "./Recipe.css"

const RecipeAPI = () => {
const [val, setVal] = useState();
const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState("chicken");

let API_KEY = "255d0ac732867dabda826909e0dbffbf	";
let API_ID = "ed1d06af";

useEffect(() => {
  getRecipe();
}, [search]);

const getRecipe = async () => {
const response = await axios.get(`https://api.edamam.com/search?q=${search}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`);
setRecipes(response.data.hits)
// console.log(response.data.hits)
}

const updateSearch = (e) =>{
e.preventDefault();
setSearch(val);
}

  return (
  <>
      <div className="main">
        <form onSubmit={updateSearch}>
         <div className="input">
          <input type = "text" placeholder='Search here...' style={{marginLeft:"150px"}} value={val} onChange={(e)=>setVal(e.target.value)}/>        
          <button className="btn" type = "submit" style={{marginLeft:"40px"}}>Search</button>
        </div>
        </form>
<div className='recipe'>
{
  recipes.map((item)=>(
    <Recipe title={item.recipe.label} calories={item.recipe.calories} image={item.recipe.image}/>
  ))
}
</div>
</div>
  </>
  );
};

export default RecipeAPI;
