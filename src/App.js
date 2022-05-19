import React from 'react'
import './index.css';
import search from '../src/Search.svg'

function App() {
  return (
    <div className="container">
      <div className="navbar">
        <div className='logo'>LOGO</div>
        <div className="input">
          <input type="search" placeholder='Введите адрес доставки'></input>
          <img src={search} alt=''/>
        </div>
        <div className="call"></div>
        <div className="login"></div>
        <div className="karzina"></div>
      </div>

      
    </div>
  );
}

export default App;
