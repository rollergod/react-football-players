import React from "react";
import styles from './PlayersBlock.module.scss';
import { ThemeContext } from "../../context/ThemeContext";

function PlayerBlock({ id, name, image, fcName, crest, assists, goals }) {

    const { theme } = React.useContext(ThemeContext);

    return (
        <div className={`${styles["content__items--item"]} ${styles[theme]}`}>
            <img src={image} />
            <p className={styles.player__name}>{name}</p>
            <div className={styles['player--stats']}>
                <p className={`${styles.info} ${styles.player__team}`}>Team: {fcName} <img src={crest} style={{ width: '20px' }} /></p>
                <p className={`${styles.info} ${styles.player__goals}`}>Goals: {goals}</p>
                <p className={`${styles.info} ${styles.player__assists}`}>Assists: {assists ?? '0'}</p>
            </div>
        </div >
    )
}

export default PlayerBlock;
