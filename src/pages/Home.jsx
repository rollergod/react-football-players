import React from "react";
import Paginate from "../components/Pagination/Paginate";
import PlayerBlock from '../components/PlayersBlock/PlayersBlock';
import Skeleton from '../components/PlayersBlock/Skeleton';
import { CategoryContext } from "../context/CategoryContext";

import styles from '../scss/app.module.scss';

const Home = () => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const [playersPerPage, setPlayersPerPage] = React.useState(8);
    const [isLoading, setIsLoading] = React.useState(true);
    const [players, setPlayers] = React.useState([]);
    const { categoryValue } = React.useContext(CategoryContext);


    const category = categoryValue === '' ? '' : `category=${categoryValue}`;
    React.useEffect(() => {
        setIsLoading(true);
        fetch(`https://63039ff9761a3bce77db8714.mockapi.io/players?page=${currentPage}&${category}&sortBy=goals&order=desc`)
            .then(response => response.json())
            .then(players => {
                console.log(players);
                setPlayers(players);
            })
            .catch((error) => {
                console.warn(error);
                alert('Не получается получить данные')
            })
            .finally(() => {
                setIsLoading(false)
            });
    }, [categoryValue, currentPage]);

    const onChangePage = (page) => {
        setCurrentPage(page)
    }

    const lastPlayerIndex = currentPage * 8;
    const firstPlayerIndex = lastPlayerIndex - 8;
    const currentPlayer = players.slice(firstPlayerIndex, lastPlayerIndex);

    return (
        <div className={styles.content}>
            <div className={styles.content__items}>
                {
                    isLoading ? [...new Array(8)].map((_, index) => (<Skeleton />)) : currentPlayer.filter((obj) => obj.goals).map((obj) => (
                        <PlayerBlock key={obj.id}  {...obj} />
                    ))
                }
            </div>
            <Paginate totalItems={players.length} playersPerPage={playersPerPage} onChangePage={onChangePage} />
        </div>
    )
}

export default Home;