import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ListDirectors from './component/ListDirector';
import Count from './component/Count';
import CountReducer from './CountReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <CountReducer/> */}
    <ListDirectors/>
    {/* <Count/> */}
  </React.StrictMode>
);


