import React, { useEffect, useState } from 'react';
import styles from './Main.module.css';
import Banner from 'components/Banner';
import Title from 'components/Title';
import Card from 'components/Card';

export default function Main() {

  const [movies, setMovies] = useState([]);

  /* 
    useEffect() é o hook que lida com alterações na página depois que já está renderizada, similar ao eventListener;
    o primeiro parâmetro é o funcionamento do hook, enquanto o segundo são as dependências, que informam quando o hook irá agir (no caso, passamos um array vazio, de forma que o hook só será chamado uma vez, na renderização);
    fetch() é a função que busca uma informação externa, como em uma API;
    o parâmetro passado é a URL da requisição que estamos fazendo;
    .then() aplica alguma transformação à resposta da fetch;
    data.json() transforma a string resposta em um objeto;
  */
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/MatheusHG94/cinetag-api/movies')
      .then(data => data.json())
      .then(data => setMovies(data))
  }, []);

  return (
    <>
      <Banner
        image='home'
      />
      <Title>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Title>
      <section className={styles.container}>
        {movies.map(movie =>
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
