



import { useFavorites } from "../context/FavoritesContext";
import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";


export default function FavoritesPage() {
    const { favorites } = useFavorites();


    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        async function fetchRecipes() {
            const fetchedRecipes = await Promise.all(
                favorites.map(async (id) => {
                    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
                    const data = await res.json();
                    return data.meals[0];
                })
            );
            setRecipes(fetchedRecipes);
        }

        fetchRecipes();
    }, [favorites]);

    return (
        <div>
            <h1>Favorite Recipes</h1>
            <div className="recipe-list">
                {recipes.map(recipe => (
                    <RecipeCard key={recipe.idMeal} recipe={recipe} />
                ))}
            </div>
        </div>
    );
}