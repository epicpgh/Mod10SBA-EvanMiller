



import {useFetch} from "../hooks/useFetch";
import {useState} from "react";
import { Link } from "react-router-dom";


export default function Home() {
    const {data, loading, error} = useFetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
    )

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <div>
            <h1>Categories</h1>
            <ul>
                {data.categories.map(category => (
                    <li key={category.idCategory}>
                        <Link to={`/category/${category.strCategory}`}>
                            {category.strCategory}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}