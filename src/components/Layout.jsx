import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
  return (
    <>
        <Header />

        <main className='pt-24 px-9 mx-auto bg-blue-50'>
            <Outlet />
        </main>
    </>
  )
}

export default Layout