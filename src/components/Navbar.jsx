// import BurgerMenu from '../assets/Icons/Tabler.svg'
import Logo from '../assets/Logos/Accenture.png';

import BurgerMenu from './../components/icon/burgerIcon.jsx';

const Navbar = () => {
    return (
        <>
            <nav className="relative navbar min-[1440px]:hidden">
                {/* Burger Menu */}
                <a href="./Settings.jsx">{BurgerMenu}</a>

                {/* Logo Accenture */}
                <a href="/">
                    <img
                        id="logo"
                        className="absolute w-20 left-16 top-16 drop-shadow-lg shadow-purple-600"
                        src={Logo}
                        alt="Accenture's logo"
                    ></img>
                </a>
            </nav>
        </>
    );
};

export default Navbar;
