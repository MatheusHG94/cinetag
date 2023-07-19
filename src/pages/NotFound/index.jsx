import React from 'react';
import styles from './NotFound.module.css';
import Title from 'components/Title';

export default function NotFound() {
    return (
        <section className={styles.container}>
            <Title>
                <h1>
                    Ops! Não encontrado.
                </h1>
            </Title>
            <p>
                O conteúdo que você procura não existe.
            </p>
        </section>
    )
}
