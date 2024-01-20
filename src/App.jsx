// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { useState } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Settings from './components/Settings';
// import Register from './components/Register';




function App() {


  return (
          <>
          <div className='App'>
            <Navbar />
          </div>
          <div className='content'>
            <Home />
            <Settings />
          </div>
          </>
  )
}

export default App
