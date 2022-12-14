import React from "react";
import logoLight from '../../assets/img/Logo.png';
import logoDark from '../../assets/img/Logo-Dark.png';
import switchLight from '../../assets/img/TurnOnNightLogo.png';
import switchDark from '../../assets/img/TurnOnDayLogo.png';
import Categories from "../Categories/Categories";
import styles from './HeaderBlock.module.scss';
import appStyles from '../../scss/app.module.scss';
import '../../scss/app.scss';


import { ThemeContext } from '../../context/ThemeContext';
import { CategoryContext } from '../../context/CategoryContext';


function HeaderBlock() {
    const { theme, setTheme } = React.useContext(ThemeContext);

    return (
        <header className={`${styles.header} ${styles[theme]}`} >
            <div className={appStyles.container}>
                <div className={styles.header__content}>
                    <img className={styles["header__content-logo"]} src={theme === 'light' ? logoLight : logoDark} />
                    <Categories />
                </div>
            </div>
            <button className={styles["button-switch"]} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                <img className={styles["img-switch"]} src={theme === 'light' ? switchLight : switchDark} />
            </button>
        </header >
    )
}

export default HeaderBlock;