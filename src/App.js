import './scss/app.scss';
import React, { createContext } from 'react';
import HeaderBlock from './components/HeaderBlock/HeaderBlock';
import Home from './pages/Home';
import styles from './scss/app.module.scss';
import { ThemeContext } from './context/ThemeContext';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';




function App() {

  const { theme } = React.useContext(ThemeContext);


  return (

    <div className={`${styles.wrapper} ${styles[theme]}`}>
      <HeaderBlock />
      <div className={styles.container}>
        <Routes>
          <Route path={process.env.PUBLIC_URL + '/'} element={<Home />} />
          <Route path={process.env.PUBLIC_URL + '/*'} element={<NotFound />} />
        </Routes>
      </div>
    </div>

  );
}

export default App;
