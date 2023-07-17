import React from 'react';
import styles from './Card.module.css';
import likeIcon from './like.png';
import dislikeIcon from './dislike.png';

export default function Card({
    title,
    banner
}) {
  return (
    <div className={styles.card}>
        <img
            src={banner}
            alt={title}
            className={styles.banner}
        />
        <h2>
            {title}
        </h2>
        <img 
            src={likeIcon}
            alt='favoritar filme'
            className={styles.like}
        />
    </div>
  )
}
