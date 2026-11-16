import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav className="fixed top-0 inset-s-0 z-20 w-full border-b border-default bg-blue-950 mx-auto px-5">
        <div className="flex items-center justify-between px-4 py-5">
          <Link to="/" className='text-xl text-white font-semibold'>
            <div className='flex items-center z-0'>
              <img src="/icon.png" alt="icon" width={30} />
              <h2 className='text-sm md:text-xl' >The Meal Recipe Finder</h2>
            </div>
          </Link>

          <ul className='flex gap-6 font-medium'>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-400'
                    : 'text-white hover:text-blue-300'
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="favorites"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-400'
                    : 'text-white hover:text-blue-300'
                }
              >
                Favorites
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

    </>
  )
}

export default Header