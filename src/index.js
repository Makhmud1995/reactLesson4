import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cold from './components/Cold';
import Hot from './components/Hot'
import Meat from './components/Meat'
import Fish from './components/Fish'
import Soup from './components/Soup'
import Grill from './components/Grill'
import Special from './components/Special'
import Baverege from './components/Baverege'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Routes>
  <Route path='/' element={<App/>}/>
  <Route path='/Cold' element={<Cold/>}/>
  <Route path='/Hot' element={<Hot/>}/>
  <Route path='/Meat' element={<Meat/>}/>
  <Route path='/Fish' element={<Fish/>}/>
  <Route path='/Soup' element={<Soup/>}/>
  <Route path='/Gril' element={<Grill/>}/>
  <Route path='/Special' element={<Special/>}/>
  <Route path='/Baverege' element={<Baverege/>}/>
</Routes>
</BrowserRouter>
);

