import React, { useEffect, useState } from 'react';
import styles from './Player.module.css';
import { useParams } from 'react-router-dom';
import Banner from 'components/Banner';
import Title from 'components/Title';
import NotFound from 'pages/NotFound';

export default function Player() {

    const params = useParams();
    const [movie, setMovie] = useState();

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/MatheusHG94/cinetag-api/movies?id=${params.id}`)
        .then(data => data.json())
        .then(data => setMovie(...data))
    }, [params.id]);

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
