import React from "react";
import logo from '../../assets/img/Logo.png';
import switchLight from '../../assets/img/TurnOnNightLogo.png';


function HeaderBlock() {
    return (
        <header className='header'>
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
            <a href="#"><img className='switch' src={switchLight} /></a>
        </header>
    )
}

export default HeaderBlock;