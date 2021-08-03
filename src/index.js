import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



ReactDOM.render(
  <React.StrictMode>
    <App id={1} name="Kamron"/>
    <App id={2} name="Alisher"/>
    <App id={3} name="Jasur"/>
    <App id={4} name="Umar"/>
    <App id={5} name="Ergash"/>
  </React.StrictMode>,
  document.getElementById('root')
);

