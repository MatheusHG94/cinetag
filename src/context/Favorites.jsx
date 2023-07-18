import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext();
FavoritesContext.displayName = 'Favorites';

export const FavoritesProvider = ({ children }) => {

    const [favorites, setFavorites] = useState([]);

    return (
        <FavoritesContext.Provider
            value={{
                favorites,
                setFavorites
            }}
        >
            {children}
        </FavoritesContext.Provider>
    )
}

export const useFavoritesContext = () => {
    const {
        favorites,
        setFavorites
    } = useContext(FavoritesContext);

    const setFavoriteMovie = (newFavorite) => {
        const repeatedFavorite = favorites.some(movie => movie.id === newFavorite.id);

        const newList = [...favorites];

        if (!repeatedFavorite) {
            newList.push(newFavorite);
            return setFavorites(newList);
        }
        newList.splice(newList.indexOf(newFavorite), 1);
        return setFavorites(newList);
    }

    return {
        favorites,
        setFavoriteMovie
    }
}