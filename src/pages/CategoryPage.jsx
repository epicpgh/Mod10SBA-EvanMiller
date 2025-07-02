

import {useFetch} from '../hooks/useFetch'
import {useParams} from 'react-router-dom'
import RecipeCard from '../components/RecipeCard'

export default function CategoryPage() {
    const {categoryName} = useParams()
    const {data, loading, error} = useFetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
    )

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <div>
            <h1>{categoryName} Recipes</h1>
            <div className="recipe-list">
                {data.meals.map(recipe => (
                    <RecipeCard key={recipe.idMeal} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}