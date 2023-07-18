import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from 'pages/Main';
import Favorites from 'pages/Favorites';
import FramePage from 'components/FramePage';
import { FavoritesProvider } from 'context/Favorites';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <FavoritesProvider>
                <Routes>
                    <Route path='/' element={<FramePage />}>
                        <Route path='/' element={<Main />} />
                        <Route path='/favorites' element={<Favorites />} />
                    </Route>
                </Routes>
            </FavoritesProvider>
        </BrowserRouter>
    )
}
