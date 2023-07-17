import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Main from 'pages/Main';
import Favorites from 'pages/Favorites';
import Container from 'components/Container';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Header />
            <Container>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/favorites' element={<Favorites />} />
                </Routes>
            </Container>
            <Footer />
        </BrowserRouter>
    )
}
