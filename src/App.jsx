import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import AnimatedRoutes from "./components/AnimatedRoutes.jsx";
import Settings from "./components/Settings.jsx";
import Spline404 from "./components/Spline404.jsx";
import Forgot from "./components/Forgot.jsx";
import {useState} from "react";
// import Register from './components/Register';




function App() {
    const [isShown, setIsShown] = useState(true);

    return (
        <Router>
            <div className='content'>
                    <Navbar/>
                <Routes>
                    <Route path='/' element={<AnimatedRoutes/>}/>
                    <Route path='/Navbar.jsx' element={<Navbar/>}/>
                    <Route path='/Settings.jsx' element={<Settings/>}/>
                    <Route path='/Spline404.jsx' element={<Spline404/>}/>
                    <Route path='/Forgot.jsx' element={<Forgot/>}/>
                </Routes>
            </div>
        </Router>
    )
}

export default App
