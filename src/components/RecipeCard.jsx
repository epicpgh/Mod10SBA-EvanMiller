


import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <Link to={`/recipe/${recipe.idMeal}`}>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        <h3>{recipe.strMeal}</h3>
      </Link>
      <p>{recipe.strCategory}</p>
      <p>{recipe.strArea}</p>
    </div>
  );
}