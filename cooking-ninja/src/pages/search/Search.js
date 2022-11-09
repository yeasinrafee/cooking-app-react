import React from 'react'
import { useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

//imported components:
import RecipeList from '../../components/RecipeList';

//imported css file:
import './Search.css';

export default function Search() {

  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get('q');

  const url = 'http://localhost:3000/recipes/?q=' + query;
  const {data, isLoading, error} = useFetch(url);
  
  return (
    <div>
      <h2 className="page-title">Recipes includes "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isLoading && <p className="loading">Loading....</p>}
      {data && <RecipeList recipes={data}/>}
    </div>
  )
}
