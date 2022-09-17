import React from "react";
import logoNotFound from '../../assets/img/notFoundImage.png';
import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
    return (
        <div className={styles.test}>
            <img src={logoNotFound}></img>
            <h1>Страница не найдена</h1>
        </div>
    )
};

export default NotFoundBlock;