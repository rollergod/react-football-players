import React from "react";
import { ThemeContext } from "../../context/ThemeContext";

function PlayerBlock({ id, name, image, fcName, crest, assists, goals }) {

    const { theme } = React.useContext(ThemeContext);

    return (
        <div className={`content__items--item ${theme}`}>
            <img src={image} />
            <p className='player__name'>{name}</p>
            <div className='player--stats'>
                <p className='info player__team'>team: {fcName} <img src={crest} style={{ width: '20px' }} /></p>
                <p className='info player__goals'>goals: {goals}</p>
                <p className='player__assists'>assists: {assists ?? '0'}</p>
            </div>
        </div>
    )
}

export default PlayerBlock;
