import React from 'react'
import './index.css';
import search from '../src/Search.svg'
import Calling from '../src/Calling.svg'
import Profile from '../src/Profile.svg'
import { Link } from 'react-router-dom';


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
<div className="menu">
  
  <Link to='/Cold'>
  <div className='set'>
    <p>Холодные закуски</p>
  </div>
  </Link>
  <Link to='/Hot'>
  <div className='set'>
    <p> Горячие закуски</p>
  </div>
  </Link>
  <Link to='/Meat'>
  <div className='set'>
    <p>Мясные блюда</p>
  </div>
  </Link>
  <Link to='/Soup'>
  <div className='set'>
    <p>Супы</p>
  </div>
  </Link>
  <Link to='/Fish'>
  <div className='set'>
    <p>Рыбные блюда</p>
  </div>
  </Link>
  <Link to='/Grill'>
  <div className='set'>
    <p>Гриль меню</p>
  </div>
  </Link>
  <Link to='/Special'>
  <div className='set'>
    <p>Фирменные блюда</p>
  </div>
  </Link>
  <Link to='/Baverege'>
  <div className='set'>
    <p>Напитки</p>
  </div>
  </Link>
</div>
    </div>
  );
}

export default App;
