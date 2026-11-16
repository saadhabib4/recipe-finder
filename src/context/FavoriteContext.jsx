import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext()

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(() => {
        const savedFavorites = localStorage.getItem("favorites")

        if(savedFavorites) {
            try {
                const parsedFavorites = JSON.parse(savedFavorites)
// Valid JSON array → restore it.
                if(Array.isArray(parsedFavorites)) {
                    return parsedFavorites
                }
// Invalid JSON → catch the error and use an empty array.
                return []
            } catch (error) {
// - Valid JSON but not an array → empty array.
                console.log(error)
                return []
            }
        }
// No saved data → empty array.
        return []
    })

    const addFavorite = (recipe) => {
        setFavorites((prevFavorites) => {
            if (prevFavorites.some((favorite) => favorite.idMeal === recipe.idMeal)) {
                return prevFavorites
            }

            return [...prevFavorites, recipe]
        })
    }

    const removeFavorite = (idMeal) => {
        setFavorites((prevFavorites) =>
            prevFavorites.filter((favorite) => favorite.idMeal !== idMeal)
        )
    }

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }, [favorites])
    
    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export const useFavorite = () => {
    return useContext(FavoritesContext)
}