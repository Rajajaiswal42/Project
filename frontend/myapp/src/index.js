import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navigation from './navigation';
import { BrowserRouter, Router, Routes, Route } from "react-router-dom"
import Add_Books from './pages/Add_Books';
import Add_CSV from './pages/Add_CSV';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route path='/Addbooks' element={<Add_Books />} />
        <Route path='/AddByCSV' element={<Add_CSV />} />
        <Route path='/' element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
