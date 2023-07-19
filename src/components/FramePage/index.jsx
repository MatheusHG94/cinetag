import React from 'react';
import styles from './FramePage.module.css';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { FavoritesProvider } from 'context/Favorites';

export default function FramePage() {
  return (
    <>
      <Header />
      <FavoritesProvider>
        <section className={styles.container}>
          <Outlet />
        </section>
      </FavoritesProvider>
      <Footer />
    </>
  )
}
