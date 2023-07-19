import React from 'react';
import styles from './Player.module.css';
import { useParams } from 'react-router-dom';
import Banner from 'components/Banner';
import Title from 'components/Title';
import movieList from 'json/db.json';
import NotFound from 'pages/NotFound';

export default function Player() {

    const params = useParams();
    const movie = movieList.find(movie => movie.id === Number(params.id));

    if (!movie) {
        return <NotFound />
    }

    return (
        <>
            <Banner
                image='player'
            />
            <Title>
                <h1>Player</h1>
            </Title>
            <section className={styles.container}>
                <iframe 
                width="100%" 
                height="100%" 
                src={movie.link} 
                title={movie.title}
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen></iframe>
            </section>
        </>
    )
}
