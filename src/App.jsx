import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import AnimatedRoutes from "./components/AnimatedRoutes.jsx";
// import Register from './components/Register';




function App() {


    return (
        <Router>
            <div className='content'>
                <Navbar/>
               <AnimatedRoutes/>
            </div>
        </Router>
    )
}

export default App
