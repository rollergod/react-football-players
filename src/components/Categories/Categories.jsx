import React from "react";
import { CategoryContext } from "../../context/CategoryContext";
import styles from '../HeaderBlock/HeaderBlock.module.scss';

const nav = [
    { name: 'все', category: '' },
    { name: 'франция', category: 'FL1' },
    { name: 'англия', category: 'EPL' },
    { name: 'италия', category: 'SA' },
    { name: 'россия', category: 'RPL' },
    { name: 'германия', category: 'BL1' }
];

const Categories = () => {

    const { categoryValue, setCategoryValue } = React.useContext(CategoryContext);

    return (
        <ul className={styles.menu}>
            {
                nav.map((obj, index) => (
                    <li key={index}
                        className={categoryValue === obj.category ? `${styles.active}` : ''}
                        onClick={() => setCategoryValue(obj.category)}
                    >
                        {obj.name}
                    </li>
                ))
            }
        </ul >
    )
}

export default Categories;