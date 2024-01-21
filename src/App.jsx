import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { useState } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Settings from './components/Settings';
// import Register from './components/Register';




function App() {


    return (
        <Router>
            <div className='App'>
                <Navbar/>
            </div>
            <div className='content'>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/Settings' element={<Settings/>}/>
                </Routes>

            </div>
        </Router>
    )
}

export default App
