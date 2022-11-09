
import React from 'react'
import useFetch from '../../hooks/useFetch';
import RecipeList from '../../components/RecipeList';

//imported css file
import './Home.css';

export default function Home() {
  const {data, isLoading, error} = useFetch('http://localhost:3000/recipes')

  return (
    <div>
      {isLoading && <p className='loading'>Loading....</p>}
      {error && <p className='error'>{error}</p>}
      {data && <RecipeList recipes = {data}/>}
    </div>
  )
}
