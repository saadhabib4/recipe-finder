import RecipeCard from "./RecipeCard"
import { Link } from "react-router-dom"

//  Many issues is this file

const RecipeGrid = ({ recipes, errorMessage, isloading, inputText, searchTerm, setSearchTerm }) => {


  if (isloading) {
    return <p>Loading recipe...</p>
  }

  if (errorMessage) {
    return <p>{errorMessage}</p>
  }

  return (
    <div className="bg-slate-100">
      {searchTerm ==='' ? (
        <p>Search for any recipe</p>
        ) : (

          <ul className="recipe-grid">
            {recipes.length === 0 ? (
              <li>No recipes found with this name.</li>
            ) : (
              recipes.map((recipe) => (
                <li key={recipe.idMeal}>
                  <RecipeCard recipe={recipe} />
                </li>
              ))
            )
            }
        </ul>
      )}
    </div>
  )
}

export default RecipeGrid