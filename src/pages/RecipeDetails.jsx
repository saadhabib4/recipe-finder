import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useFavorite } from "../context/FavoriteContext"
import ErrorPage from "./ErrorPage"


const RecipeDetails = () => {
  const { favorites, addFavorite, removeFavorite } = useFavorite()
  const { id } = useParams()

  const [recipe, setRecipe] = useState(null)
  // The initial state of loading might cause issues
  const [isloading, setIsloading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const isFavorite = (idMeal) => {
    return favorites.some((favorite) => favorite.idMeal === idMeal)
  
  } 

  useEffect(() => {
    const fetchRecipe = async() => {
      setIsloading(true)
      setErrorMessage('')

      try {
        const endpoint = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`

        const response = await fetch(endpoint)

        if(!response.ok) {
          throw new Error('Error to fecth recipe')
        }

        const data = await response.json()

        setRecipe(data.meals ? data.meals[0] : null)
        console.log(data.meals)
        

      } catch(error) {
        console.log('Error fectching recipe: ', error)
        setErrorMessage("Error loading recipe")
      } finally {
        setIsloading(false)
      }
    }

    fetchRecipe()
  }, [id])

  
  
  
  
  // ********* Tried running this in 3G and Loading is not showing. It show just before the recipe is about to load 
  
  if (isloading) {
    return <p>Loading recipe...</p>
  }
  
  if (errorMessage) {
    return <ErrorPage 
      title="Request Failed"
      message={errorMessage}
     />
  }
  
  if (!recipe) {
    return <ErrorPage 
      title="Recipe Not Found"
      message="Sorry, we couldn't find the recipe you're looking for."
    />
  }
  
  // 3. Extract ingredients and measurements  ****** These below "if's" to render ingredients after recipe loads
  const ingredients = []
  

  for (let i=1; i<=20; i++) {
    ingredients.push({
      ingredient: recipe[`strIngredient${i}`], 
      measure: recipe[`strMeasure${i}`]})
  }
  
  const filteredIngredients = ingredients.filter((ingredient) => {
    return ingredient.ingredient?.trim()
  })
  console.log(filteredIngredients)
  

  return (
    <div className="mt-10 mb-20">
      <Link to={'/'}> 
        <div className="flex gap-1 items-center text-slate-400 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Back to Home
        </div> 
      </Link>

      <div className=" bg-white px-3 pt-3 pb-10 rounded-sm">

        <div className="flex flex-wrap gap-6">

          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="w-80 rounded-md mb-6 "
          />

          <div className="flex flex-col mt-4">
            <h1 className="text-2xl font-bold text-slate-900 mb-3">{recipe.strMeal}</h1>
            <div className="flex gap-6 mb-4 ">
              <div className="flex gap-1 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5 text-gray-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <p>{recipe.strCountry}</p>
              </div>

              <div className="border-l border-blue-600"></div>

              <div className="flex gap-1 items-center">
                <svg
                  className="size-6 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M18.011 13H20c-.367 2.5551-2.32 4.6825-4.9766 5.6162V20H8.97661v-1.3838C6.31996 17.6825 4.36697 15.5551 4 13h14.011Zm0 0c1.0995-.0059 1.989-.8991 1.989-2 0-.8637-.5475-1.59948-1.3143-1.87934M18.011 13H18m0-3.99997c.2409 0 .4718.04258.6857.12063m0 0c.8367-1.0335.7533-2.67022-.2802-3.50694-1.0335-.83672-2.5496-.6772-3.3864.35631-.293-1.50236-1.7485-2.15377-3.2509-1.8607-1.5023.29308-2.48263 1.74856-2.18956 3.25092C8.9805 6.17263 7.6182 5.26418 6.15462 6.00131 4.967 6.59945 4.45094 8.19239 5.04909 9.38002m0 0C4.37083 9.66467 4 10.3357 4 11.1174 4 12.1571 4.84288 13 5.88263 13m-.83354-3.61998c.2866-.12029 1.09613-.40074 2.04494.3418m5.27497-.89091c1.0047-.4589 2.1913-.01641 2.6502.98832"
                  />
                </svg>
                <p>{recipe.strCategory}</p>

              </div>

            </div>
            <div className="flex gap-4 items-center">
              <button className={`btn-primary hover:bg-blue-600 ${isFavorite(recipe.idMeal) ? "bg-slate-500" : "bg-blue-500"}`}
                onClick={
                  isFavorite(recipe.idMeal) 
                  ? () => removeFavorite(recipe.idMeal) 
                  : () => addFavorite(recipe)
                }
              >
                {isFavorite(recipe.idMeal) ? "Remove from favorites" : "Add to favorites"}
              </button>

              {recipe.strYoutube != '' && (
                <button
                className="btn-primary bg-white text-slate-950 border border-slate-300 hover:bg-blue-200"
                onClick={(e) => {e.stopPropagation(); window.open(recipe.strYoutube, '_blank', 'noopener,noreferrer')}}
                >
                  Watch on YouTube
                </button>
              )}
            </div>

            <p className="text-gray-550 font-semibold mt-4 text-slate-700">Category: <span className="font-medium">{recipe.strCategory}</span></p>
          </div>
          
          <div className="flex flex-col items-center mx-auto">
            <h3 className="text-2xl text-blue-600 font-semibold m-2">
              Ingredients
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-50 p-5">
              {filteredIngredients.map((item) => (
                <p
                  key={item.ingredient}
                  className="flex justify-between gap-4 border-b border-slate-300 py-2 font-semibold"
                >
                  <span>&bull; {item.ingredient}</span>
                  <span className="font-normal text-right">{item.measure}</span>
                </p>
              ))}
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-4">Instructions:</h3>
        <p className="text-slate-700 text-md">{recipe.strInstructions}</p>
      </div>
      
    </div>
  )
}

export default RecipeDetails