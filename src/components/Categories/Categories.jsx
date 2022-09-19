import React from "react";
import { CategoryContext } from "../../context/CategoryContext";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryValue } from '../../redux/slices/filterSlice';
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

    const dispatch = useDispatch();
    const category = useSelector((state) => state.filterSlice.categoryValue);
    const changeCategoryValue = (obj) => {
        dispatch(setCategoryValue(obj.category));
    }
    // const { categoryValue, setCategoryValue } = React.useContext(CategoryContext);

    return (
        <ul className={styles.menu}>
            {
                nav.map((obj, index) => (
                    <li key={index}
                        className={category === obj.category ? `${styles.active}` : ''}
                        onClick={() => changeCategoryValue(obj)}
                    >
                        {obj.name}
                    </li>
                ))
            }
        </ul >
    )
}

export default Categories;