


import {useFetch} from "../hooks/useFetch.js";
import {useParams} from "react-router-dom";
import {useFavorites} from "../context/FavoritesContext.jsx";

export default function RecipeDetailPage() {
    const {recipeId} = useParams();
    const {data, loading, error} = useFetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
    );

    const {addFavorite, removeFavorite, isFavorite} = useFavorites();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!data || !data.meals) return <p>No recipe found.</p>;

    const recipe = data.meals[0];
    const favorite = isFavorite(recipe.idMeal);

    return (
        <div>
            <h1>{recipe.strMeal}</h1>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <button
                onClick={() =>
                    favorite
                        ? removeFavorite(recipe.idMeal)
                        : addFavorite(recipe.idMeal)
                }
            >
                {favorite ? "Remove from Favorites" : "Add to Favorites"}
            </button>
            <h2>Ingredients</h2>
            <ul>
                {Array.from({ length: 20 }, (_, i) => i + 1)
                    .map((i) => ({
                        ingredient: recipe[`strIngredient${i}`],
                        measure: recipe[`strMeasure${i}`],
                    }))
                    .filter((item) => item.ingredient)
                    .map((item, index) => (
                        <li key={index}>
                            {item.ingredient} - {item.measure}
                        </li>
                    ))}
            </ul>
            <h2>Instructions</h2>
            <p>{recipe.strInstructions}</p>
        </div>
    );
}