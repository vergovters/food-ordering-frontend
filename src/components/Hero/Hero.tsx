import React from 'react';
import styles from "./Hero.module.css"

const Hero = () => {
    return (
        <header className={styles.mainHeading}>
                <div className={styles.mainHeading__content}>
                <article className={styles.mainHeading__text}>
                <p className={styles.mainHeading__preTitle}>Food-ordering</p>
                <h2 className={styles.mainHeading__title}>GastroHaven</h2>
                <p className={styles.mainHeading__description}>
                    Far far away, behind the word mountains, far from the countries
                    Vokalia and Consonantia, there live the blind texts.
                </p>
                <button className={styles.cta}>buy some food</button>
            </article>

            <figure className={styles.mainHeading__image}>
                <img
                    src="https://img.freepik.com/premium-photo/homemade-hamburger-with-onion-tomato-lettuce_681987-3976.jpg"
                    alt=""
                />
            </figure>
        </div>
        </header>
    );
};

export default Hero;