import React from 'react';
import styles from './Favorites.module.css';
import Banner from 'components/Banner';
import Title from 'components/Title';
import Card from 'components/Card';
import { useFavoritesContext } from 'context/Favorites';

export default function Favorites() {

  const {
    favorites
  } = useFavoritesContext();

  return (
    <>
      <Banner
        image='favorites'
      />
      <Title>
        <h1>Meus Favoritos</h1>
      </Title>
      <section className={styles.container}>
        {favorites.map(movie => 
          <Card 
            key={movie.id}
            {...movie}
          />  
        )}
      </section>
    </>
  )
}
