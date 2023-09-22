import React, {useState} from 'react'

import './index.css';
import './App.css';

import HomePage from './routes/HomePage.jsx';
import NavigationBar from './NavigationBar';
import LoginPage from './routes/LoginPage';
import RegistrationPage from './routes/RegistrationPage';



import { Routes, Route } from 'react-router-dom';



//add homepage code to call the hompage
function App() {
    return (
        <Routes>
        <Route element={<NavigationBar />}> 
        <Route path='/' element={<HomePage />}/>
        <Route path='login' element={<LoginPage />} />
        <Route path='registration' element={<RegistrationPage />} />
        </Route>
        </Routes>
        
    );
}

export default App;