import React from 'react';
import styles from './Main.module.css';
import Banner from 'components/Banner';
import Title from 'components/Title';
import Card from 'components/Card';
import movieList from 'json/db.json';

export default function Main() {
  return (
    <>
      <Banner
        image='home'
      />
      <Title>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Title>
      <section className={styles.container}>
        {movieList.map(movie => 
          <Card 
            key={movie.id}
            {...movie} // passando os atributos de movie com o spread operator, o componente Card já identifica automaticamente como props, desde que o nome do atributo seja igual ao da prop esperada
            movie={movie}
          />
        )}
      </section>
    </>
  )
}
