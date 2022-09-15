import './scss/app.scss';
import React, { createContext } from 'react';
import HeaderBlock from './components/HeaderBlock/HeaderBlock';
import Home from './pages/Home';
import styles from './scss/app.module.scss';
import { ThemeContext } from './context/ThemeContext';



function App() {

  const { theme } = React.useContext(ThemeContext);


  return (

    <div className={`${styles.wrapper} ${styles[theme]}`}>
      <HeaderBlock />
      <div className={styles.container}>
        <Home />
      </div>
    </div>

  );
}

export default App;
