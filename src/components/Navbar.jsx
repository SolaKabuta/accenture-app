// import BurgerMenu from '../assets/Icons/Tabler.svg'
import Logo from '../assets/Logos/Accenture.png'


const Navbar = () => {
    return ( 
        <>
            <nav className="navbar 2xl:hidden">
                {/* Burger Menu */}
            <svg className='absolute scale-150 right-20 top-24 2xl:hidden' xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
                {/* Logo Accenture */}
                <img className='absolute w-20 left-16 top-16' src={Logo} alt="Accenture's logo"></img>
            </nav>
        </>
     );
}
 
export default Navbar;