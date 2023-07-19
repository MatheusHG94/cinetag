import React from 'react';
import styles from './Card.module.css';
import likeIcon from './like.png';
import dislikeIcon from './dislike.png';
import { useFavoritesContext } from 'context/Favorites';
import { Link } from 'react-router-dom';

export default function Card({
    id,
    title,
    banner,
    movie
}) {

    const {
        favorites,
        setFavoriteMovie
    } = useFavoritesContext();

    const isFavorite = favorites.some(movie => movie.id === id)

    const icon = isFavorite ? dislikeIcon : likeIcon ;

    return (
        <div className={styles.card}>
            <Link className={styles.link} to={`/${id}`} >
                <img
                    src={banner}
                    alt={title}
                    className={styles.banner}
                />
            </Link>
            <h2>
                {title}
            </h2>
            <img
                src={icon}
                alt='favoritar filme'
                className={styles.like}
                onClick={() => setFavoriteMovie(movie)}
            />
        </div>
    )
}
