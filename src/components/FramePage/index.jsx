import React from 'react';
import styles from './FramePage.module.css';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';

export default function FramePage() {
  return (
    <>
      <Header />
      <section className={styles.container}>
        <Outlet />
      </section>
      <Footer />
    </>
  )
}
