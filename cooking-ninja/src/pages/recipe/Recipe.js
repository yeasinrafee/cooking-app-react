import './Recipe.css';

import React from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

export default function Recipe() {
  const {id} = useParams();
  const {data:recipe, isLoading, error} = useFetch(`http://localhost:3000/recipes/${id}`)
  return (
    <div className='recipe'>
      {isLoading && <p className='loading'>Loading....</p>}
      {error && <p className='error'>{error}</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Take {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      )}
    </div>
  )
}
