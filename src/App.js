import './scss/app.scss';
import logo from './assets/img/Logo.png';
import nei from './assets/img/nei.png';
function App() {
  return (
    <div className='wrapper'>

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
      </header>
      <div className='container'>
        <div className='content'>
          <div className='content__items'>
            <div className='content__items--item'>
              <img src={nei} />
              <p className='player__name'>Neymar da Silva Santos Júnior</p>
              <div className='player--stats'>
                <p className='info player__team'>team: Paris Saint-Germain FC <img /></p>
                <p className='info player__goals'>goals: 7</p>
                <p className='player__assists'>assists: 6</p>
              </div>
            </div>
            <div className='content__items--item'>
              <img src={nei} />
              <p className='player__name'>Neymar da Silva Santos Júnior</p>
              <div className='player--stats'>
                <p className='info player__team'>team: Paris Saint-Germain FC <img /></p>
                <p className='info player__goals'>goals: 7</p>
                <p className='player__assists'>assists: 6</p>
              </div>
            </div>
            <div className='content__items--item'>
              <img src={nei} />
              <p className='player__name'>Neymar da Silva Santos Júnior</p>
              <div className='player--stats'>
                <p className='info player__team'>team: Paris Saint-Germain FC <img /></p>
                <p className='info player__goals'>goals: 7</p>
                <p className='player__assists'>assists: 6</p>
              </div>
            </div>
            <div className='content__items--item'>
              <img src={nei} />
              <p className='player__name'>Neymar da Silva Santos Júnior</p>
              <div className='player--stats'>
                <p className='info player__team'>team: Paris Saint-Germain FC <img /></p>
                <p className='info player__goals'>goals: 7</p>
                <p className='player__assists'>assists: 6</p>
              </div>
            </div>
            <div className='content__items--item'>
              <img src={nei} />
              <p className='player__name'>Neymar da Silva Santos Júnior</p>
              <div className='player--stats'>
                <p className='info player__team'>team: Paris Saint-Germain FC <img /></p>
                <p className='info player__goals'>goals: 7</p>
                <p className='player__assists'>assists: 6</p>
              </div>
            </div>
            <div className='content__items--item'>
              <img src={nei} />
              <p className='player__name'>Neymar da Silva Santos Júnior</p>
              <div className='player--stats'>
                <p className='info player__team'>team: Paris Saint-Germain FC <img /></p>
                <p className='info player__goals'>goals: 7</p>
                <p className='player__assists'>assists: 6</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
