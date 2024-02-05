import NavBar from './navBar'
import Footer from './footer'
import FavoritesProvider from '../common'
import { Outlet } from 'react-router-dom'

export default function MainContainer() {
    return (
        <main>
            <NavBar />
            <FavoritesProvider>
                <Outlet />
            </FavoritesProvider>
            <Footer />
        </main>
    )
}