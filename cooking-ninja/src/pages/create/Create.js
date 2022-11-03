import './Create.css'

import { useState, useRef } from 'react';

export default function Create() {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [newIngredient, setNewIngredient] = useState('');
  const [ingredient, setIngredient] = useState([]);
  const ingredientInput = useRef(null);

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(title, method, cookingTime, ingredient);
  }

  const handleAdd = (e) =>{
    e.preventDefault();
    const ing = newIngredient.trim();

    if(ing && !ingredient.includes(ing)){
      setIngredient(prevIngredient => [...prevIngredient, ing]);
    }
    setNewIngredient('');
    ingredientInput.current.focus();
  }

  return (
    <div className='create'>
      <h2 className='page-title'>Add a new Recipe</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe Title: </span>
        <input
          type='text'
          onChange={(e)=> setTitle(e.target.value)}
          value={title}
          required
          />
       </label>

       <label>
        <span>Recipe ingredient</span>
        <div className="ingredients">
          <input type="text"
          onChange = {(e) => setNewIngredient(e.target.value)} 
          value = {newIngredient}
          ref={ingredientInput}
          />
          <button onClick={handleAdd} className="btn">Add</button>
        </div>
       </label>
       <p>Current ingredients: {ingredient.map(i => <em key={i}>{i}, </em>)}</p>

        <label>
          <span>Recipe method: </span>
          <textarea
            onChange = {(e) => setMethod(e.target.value)}
            value = {method}
            required
          />
        </label>

        <label>
          <span>Cooking time: </span>
          <input
            type="number"
            onChange = {(e)=> setCookingTime(e.target.value)}
            value = {cookingTime}
            required
          />
        </label>
        <button className='btn'>Submit</button>
        
      </form>
    </div>
  )
}
