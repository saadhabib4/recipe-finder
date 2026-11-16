import { useState } from 'react'

import SearchBar from '../components/SearchBar'
import RecipeGrid from '../components/RecipeGrid'


const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1'

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json'
  }
}


const Home = () => {
  const [inputText, setInputText] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [isloading, setIsloading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [recipes, setRecipes] = useState([])


  const handleSubmit = async (event) => {
    event.preventDefault()

    if(inputText.trim().length === 0) {
      setRecipes([])
      setErrorMessage('')
      set(setSearchTerm(''))
      return
    }

    setIsloading(true)

    setErrorMessage('')


    try {
      setSearchTerm(inputText.trim())
      const endpoint = `${API_BASE_URL}/search.php?s=${encodeURIComponent(inputText)}`
      
      const response = await fetch(endpoint, API_OPTIONS)

      if(!response.ok) {
        throw new Error("Error fetching recipe")
      }

      const data = await response.json()

      setRecipes(data.meals || [])

      
    } catch(error) {
      console.log('Error fetching recipes: ', error)
      setErrorMessage("Error loading recipes")
    } finally {
      setIsloading(false)
    }
  }



  return (
    <>
      <div className='w-full flex justify-center'>
        <div className='max-w-3xl flex flex-col justify-center items bg-center mb-8 '>
          <h1 className='mt-10 md:mt-3 text-center text-3xl font-bold text-[#172554]'>
            Discover Delicious Recipes
          </h1>
          <p className='text-center text-xl text-slate-600'>Search for your favorite meals and explore flavors</p>
        </div>
      </div>

      <SearchBar 
        inputText={inputText}
        handleSubmit={handleSubmit}
        setInputText={setInputText}
      />
      
      <RecipeGrid 
        inputText={inputText}
        recipes={recipes}
        isloading={isloading}
        errorMessage={errorMessage}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      
    </>
  )
}

export default Home