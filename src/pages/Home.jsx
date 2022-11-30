import React from "react";
import Paginate from "../components/Pagination/Paginate";
import PlayerBlock from '../components/PlayersBlock/PlayersBlock';
import Skeleton from '../components/PlayersBlock/Skeleton';
import axios from 'axios';
import { CategoryContext } from "../context/CategoryContext";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../redux/slices/filterSlice";
import { nav } from "../components/Categories/Categories";

import styles from '../scss/app.module.scss';

const Home = () => {
    const dispatch = useDispatch();
    const categoryValue = useSelector((state) => state.filterSlice.categoryValue);
    const currentPage = useSelector((state) => state.filterSlice.currentPage);
    // const [currentPage, setCurrentPage] = React.useState(1);
    const [playersPerPage] = React.useState(8);
    const [isLoading, setIsLoading] = React.useState(true);
    const [players, setPlayers] = React.useState([]);
    // const { categoryValue } = React.useContext(CategoryContext);

    const category = categoryValue === '' ? '' : `category=${categoryValue}`;

    const onChangePage = (page) => {
        dispatch(setCurrentPage(page));
    }

    const fetchPlayers = () => {
        setIsLoading(true);

        axios
            .get(`https://63039ff9761a3bce77db8714.mockapi.io/players?page=${currentPage}&${category}&sortBy=goals&order=desc`)
            .then((res) => {
                setPlayers(res.data);
                setIsLoading(false);
            })
    }

    React.useEffect(() => {
        fetchPlayers();
    }, [categoryValue, currentPage]);

    const lastPlayerIndex = currentPage * 8;
    const firstPlayerIndex = lastPlayerIndex - 8;
    const currentPlayers = players.slice(firstPlayerIndex, lastPlayerIndex);

    return (
        <div className={styles.content}>
            <div className={styles.content__items}>
                {
                    isLoading ? [...new Array(8)].map((_, index) => (<Skeleton />)) : currentPlayers.filter((obj) => obj.goals).map((obj) => (
                        <PlayerBlock key={obj.id}  {...obj} />
                    ))
                }
            </div>
            <Paginate totalItems={players.length} playersPerPage={playersPerPage} onChangePage={onChangePage} />
        </div>
    )
}

export default Home;