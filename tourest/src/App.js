import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../src/components/Header';
import MainContent from '../src/components/MainContent';
import Trips from './components/trip';
import Footer from '../src/components/Footer';
import './App.css';
import BackgroundVideo from '../src/components/BackgroundVideo'

function App() {
    return (
        <Router>
            <div className="App">
                <BackgroundVideo />
                <Routes>
                    <Route path="/" element={<MainContent />} />
                    <Route path="/trip" element={<Trips/>} />
                    {/* Add more routes as needed */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
