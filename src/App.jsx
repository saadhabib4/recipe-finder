
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Favorites from './pages/Favorites'
import RecipeDetails from './pages/RecipeDetails'
import Layout from './components/Layout'
import { FavoritesProvider } from './context/FavoriteContext'
import ErrorPage from './pages/ErrorPage'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'favorites',
        element: <Favorites />,
      },
      {
        path: 'recipe/:id',
        element: <RecipeDetails />,
      },
      {
        path: '*',
        element: (
        <ErrorPage 
          title= "Page Not Found"
          message="Sorry, the page you're looking for doesn't exist."
        />
        ),
      },
    ],
  },
])

function App() {
  return (
    <FavoritesProvider>
      <RouterProvider router={router} />
    </FavoritesProvider>
  )
}

export default App
