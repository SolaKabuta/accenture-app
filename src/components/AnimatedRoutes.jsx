import {Route, Routes, useLocation} from "react-router-dom";
import Home from "./Home.jsx";
import Settings from "./Settings.jsx";

import {AnimatePresence} from 'framer-motion';

const AnimatedRoutes = () => {

    const location = useLocation();

    return (
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home/>}/>
            <Route path='/Settings.jsx' element={<Settings/>}/>
        </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;