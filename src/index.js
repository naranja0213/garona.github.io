import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';

// import { BrowserRouter, Route } from "react-router-dom";
import Divorce from './Pages/Divorce/DivorcePage.js'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Penal from '../src/Pages/PenalPage/Penal'
import CivilPage from './Pages/CivilPage/CivilPage.js';

import InternacionalPage from './Pages/InternacionalPage/Internacional';
import MercantilPage from './Pages/MercantilPage/Mercantil';
import DespachoPage from './Pages/DespachoPage/Despacho';
import ContactoPage from './Pages/ContactoPage/Contacto';

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>
//   }
// ]);

// const root= ReactDOM.creatRoot(document.getElementById('root'));
ReactDOM.render(
    // <RouterProvider router={router}/>
    
    <Router>
      <Routes >

        <Route exact path='/' element={<App/>}/>
        <Route exact path='/Home' element={<App/>}/>
        <Route exact path='Penal' element={<Penal/>}/>
        {/* // <App/>, */}
        <Route exact path='Civil' element={<CivilPage/>}/>
        <Route exact path='Divorce' element={<Divorce/>}/>
        <Route exact path='Internacional' element={<InternacionalPage/>}/>
        <Route exact path='Mercantil' element={<MercantilPage/>}/>
        <Route exact path='Despacho' element={<DespachoPage/>}/>
        <Route exact path='Contacto' element={<ContactoPage/>}/>
      </Routes>
      
    </Router>,
    
    document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
