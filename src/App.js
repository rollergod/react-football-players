import './scss/app.scss';
import React, { createContext } from 'react';
import Skeleton from './components/PlayersBlock/Skeleton';
import HeaderBlock from './components/HeaderBlock/HeaderBlock';
import PlayerBlock from './components/PlayersBlock/PlayersBlock';
import styles from './scss/app.module.scss';
import { ThemeContext } from './context/ThemeContext';


function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [players, setPlayers] = React.useState([]);
  const { theme } = React.useContext(ThemeContext);

  React.useEffect(() => {
    fetch('https://63039ff9761a3bce77db8714.mockapi.io/players')
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
  }, []);

  return (
    <div className={`${styles.wrapper} ${styles[theme]}`}>
      <HeaderBlock />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.content__items}>
            {
              isLoading ? [...new Array(8)].map((_, index) => (<Skeleton />)) : players.map((obj) => (
                <PlayerBlock key={obj.id}  {...obj} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
