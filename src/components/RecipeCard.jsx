import { useFavorite } from "../context/FavoriteContext"
import { Link } from "react-router-dom"


const RecipeCard = ({ recipe}) => {
    const { idMeal, strMeal, strCategory, strArea, strMealThumb} = recipe
 
        const { favorites, addFavorite, removeFavorite } = useFavorite()
        const isFavorite = (idMeal) => {
            return favorites.some((favorite) => favorite.idMeal === idMeal)
        }



    return (
        <div className='recipe-card relative'>
            <Link
                to={`/recipe/${idMeal}`}
            >
            <img  src={strMealThumb} alt={strMeal} />
            <h3 className='text-slate-800 text-xl mt-2'>{strMeal}</h3>

            <div className='flex gap-2 items-center text-slate-600'>
                <p>{strCategory}</p>
                <span className='text-xl'>&#x2022; </span>
                <p>{strArea}</p>
            </div>
            </Link>
            <button
                className="absolute top-3 right-5 text-3xl text-red-500"
                onClick={() =>
                    isFavorite(idMeal)
                    ? removeFavorite(idMeal)
                    : addFavorite(recipe)
                }
            >
                {isFavorite(idMeal) ? "♥" : "♡"}
            </button>
        </div>
    )
    }

export default RecipeCard