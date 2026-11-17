# 🍽️ Recipe Finder

A responsive recipe discovery application built with **React** and **Tailwind CSS**, powered by [TheMealDB API](https://www.themealdb.com/).

Search for meals, explore their ingredients and cooking instructions, and save your favorite recipes for later.

## Live Demo
https://test-recipe-finder-three.vercel.app/

## ✨ Features

- **Search Recipes:** Find recipes by entering a meal name.
- **Recipe Details:** Explore ingredients, measurements, cooking instructions, and other recipe information.
- **Favorites:** Add and remove recipes from your personal favorites list.
- **Persistent Storage:** Favorite recipes are saved in localStorage, so they remain available after refreshing the page.
- **Navigation:** Navigate between Home, Favorites, and Recipe Details pages.
- **Responsive Design:** Works across desktop, tablet, and mobile screens.
- **Error Handling:** Includes loading, empty, and error states, along with a custom page-not-found screen.

## 🛠️ Technologies Used

- React
- JavaScript
- Tailwind CSS
- React Router DOM
- TheMealDB API
- Context API
- Browser localStorage
- Vite

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/saadhabib4/recipe-finder.git
   ```

2. Navigate to the project directory:

   ```bash
   cd recipe-finder
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal.

## 📁 Project Structure

```text
src/
├── components/
│   ├── Header.jsx
│   ├── Layout.jsx
│   ├── RecipeCard.jsx
│   ├── RecipeGrid.jsx
│   └── SearchBar.jsx
│
├── context/
│   └── FavoriteContext.jsx
│
├── pages/
│   ├── ErrorPage.jsx
│   ├── Favorites.jsx
│   ├── Home.jsx
│   └── RecipeDetails.jsx
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## 🌐 API

Recipe data is provided by [TheMealDB](https://www.themealdb.com/), a free recipe API.

## 👨‍💻 Author

**Saad Habib**

- GitHub: [@saadhabib4](https://github.com/saadhabib4)

---

Built as a hands-on React learning project.
