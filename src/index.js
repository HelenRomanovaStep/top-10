import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ListDirectors from './component/ListDirector';
import Count from './component/Count';
import CountReducer from './CountReducer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Head from './views/Head';
import Foot from './views/Foot';
import About from './pages/About';
import News from './pages/News';
import NotFound from './pages/NotFound';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <CountReducer/> */}
    <BrowserRouter>
        <Head/>
         {/* <Main/> */}
         <Routes>
              <Route path='/' element={<Main/>} />
              <Route path='about' element={<About/>} />
              <Route path='news'  element={<News/>} />
              
              <Route path='*' element={<NotFound/>} />
          </Routes>
        <Foot/> 
    </BrowserRouter>
    {/* <Count/> */}
  </React.StrictMode>
);


