import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Favorites from './pages/favorites'
import Start from './pages/start'
import Player from './pages/player'
import NotFound from './pages/404'
import MainContainer from './components/mainContainer'

export default function AppRoutes() {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainContainer />}>
                        <Route index element={<Start />} />
                        <Route path="favoritos" element={<Favorites />} />
                        <Route path=":id" element={<Player />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
        </BrowserRouter>
    )
}