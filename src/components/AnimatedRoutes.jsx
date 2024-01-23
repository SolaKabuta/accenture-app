import {Route, Routes, useLocation} from "react-router-dom";
import Home from "./Home.jsx";
import Settings from "./Settings.jsx";

import {AnimatePresence} from 'framer-motion';
import Forgot from "./Forgot.jsx";

const AnimatedRoutes = () => {

    const location = useLocation();

    return (
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home/>}/>
            <Route path='/Settings.jsx' element={<Settings/>}/>
            <Route path='/Forgot.jsx' element={<Forgot/>}/>
        </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;