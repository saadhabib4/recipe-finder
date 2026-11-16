

const SearchBar = ( { handleSubmit, inputText, setInputText } ) => {
  return (
    <form onSubmit={handleSubmit} className="mb-10 ">
      <label htmlFor="recipe-search">
        Search for a recipe
      </label>      
      <input 
        id="recipe-search"
        placeholder="e.g Chicken curry"
        type="text"
        className='bg-white text-slate-950 rounded-md px-3 mx-2 py-1.5 border border-slate-200 focus:outline-2' 
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
        />
      <button
        type='submit'
        className="btn-primary bg-blue-500 hover:bg-blue-600"
        >
        Search
      </button>
    </form>
  )
}

export default SearchBar