import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from 'pages/Main';
import Favorites from 'pages/Favorites';
import FramePage from 'components/FramePage';
import Player from 'pages/Player';
import NotFound from 'pages/NotFound';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<FramePage />}>
                    <Route index element={<Main />} />
                    <Route path='favorites' element={<Favorites />} />
                    <Route path='video/:id' element={<Player />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
