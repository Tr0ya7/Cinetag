import { createContext, useContext, useState } from "react"

export const FavoritesContext = createContext()
FavoritesContext.displayName = 'favorites'

export default function FavoritesProvider({ children }) {
    const [favorite, setFavorite] = useState([])
    
    return (
        <FavoritesContext.Provider value={{ favorite, setFavorite }}>
            { children }
        </FavoritesContext.Provider>
    )
}

export function useFavoriteContext() {
    const { favorite, setFavorite } = useContext(FavoritesContext)

    function addFavorite(newFavorite) {
        const repetFavorite = favorite.some((item) => item.id === newFavorite.id) //procura se tem um valor com o id igual de algum item já existente
        var newFavoriteList = [...favorite]

        if (!repetFavorite) {
            newFavoriteList.push(newFavorite)
            return setFavorite(newFavoriteList)
        }
        newFavoriteList.splice(newFavoriteList.indexOf(newFavorite), 1) //caso o valor já existir dentro dos favoritos já adicionados o splice vai excluilo da lista
        return setFavorite(newFavoriteList)
    }
    return {favorite, addFavorite}
}