import React from 'react'
import './index.css';
import search from '../src/Search.svg'
import Calling from '../src/Calling.svg'
import Profile from '../src/Profile.svg'


function App() {
  return (
    <div className="container">
      <div className="navbar">
        <div className='logo'>LOGO</div>
        <div className="input">
          <input type="search" placeholder='Введите адрес доставки'></input>

          <img src={search} alt=''/>   </div>
        <div className="call">
        <img src={Calling} alt='' />
          <div className='text'>
          <p>Контакты:
          <p id='ptag'>+7 (917) 510-57-59</p>
          </p>
          </div>
        </div>
        <div className="login">
          <img src={Profile}alt='' />
          <p>Войти</p>
        </div>
        <div className="karzina">
          <button>Korzina |</button>
        </div>
      </div>

      
    </div>
  );
}

export default App;
