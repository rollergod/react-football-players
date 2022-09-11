import React from "react";
import logo from '../../assets/img/Logo.png';
import switchLight from '../../assets/img/TurnOnNightLogo.png';
import switchDark from '../../assets/img/TurnOnDayLogo.png';

import { ThemeContext } from '../../context/ThemeContext';

function HeaderBlock() {
    const { theme, setTheme } = React.useContext(ThemeContext);

    return (
        <header className={`header ${theme}`} >
            <div className='container'>
                <div className='header__content'>
                    <img className='header__content--logo' src={logo} />
                    <ul className='menu'>
                        <li><a href="">все</a></li>
                        <li><a href="">франция</a></li>
                        <li><a href="">англия</a></li>
                        <li><a href="">италия</a></li>
                        <li><a href="">россия</a></li>
                        <li><a href="">германия</a></li>
                    </ul>
                </div>
            </div>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                <img className='switch' src={theme === 'light' ? switchLight : switchDark} />
            </button>
        </header >
    )
}

export default HeaderBlock;