import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';
import Developer from './Developer';

function App() {
    const YOUR_APP_ID='8d24cd0e';
    const YOUR_APP_KEY='4e61b9d0086b0fb248ca45b68205b952';

    const [recipe,setRecipe] = useState([]);
    const [search,setSearch] = useState('');
    const [query,setQuery] = useState('banana')


    const getRecipe=()=>{
        fetch(`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`).then(res=>res.json()).then(data=>
        setRecipe(data.hits)
        )
    }
    useEffect(()=>{
      getRecipe();
    },[query])
    const handleChange=(e)=>{
       setSearch(e.target.value);
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      setQuery(search);
      setSearch('')
    }

  return (
    <div>
        <div id="center">
           <input type='text' placeholder="Search Recipes..." id="input" value={search} onChange={handleChange}></input>
           <button id="button" onClick={handleSubmit}>Search</button>
        </div>
        <div className="center row">
          {
            recipe.map(data=><Recipe name={data.recipe.label} image={data.recipe.image} calories={data.recipe.calories}/>)
          }
        </div>
        <Developer></Developer>
    </div>
  );
}

export default App;
