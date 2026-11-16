import { Link } from "react-router-dom"
import { useFavorite } from "../context/FavoriteContext"
import RecipeCard from "../components/RecipeCard"

const Favorites = () => {
  const { favorites } = useFavorite()

  return (
    <div>
      {favorites.length ===0 ? (
        <p>You have no favorite recipes</p>
      ) : (
        <ul className="recipe-grid">
        {favorites.map((recipe) =>
          <li key={recipe.idMeal}>            
              <RecipeCard recipe={recipe} />
          </li>
        )}
        </ul>
    )
      }
    </div>
  )
}

export default Favorites