import LOGO from "../../assets/Logo.png";
import BURGER from "../../assets/burger.png"
import { NavLink } from "react-router-dom";
import "./header.css"
import { useState } from "react";
import MobileMenu from "../../components/MobileMenu";


const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const handleMenu=() => {
        setMenuOpen(!menuOpen)
    }
    return (

        <header>
            <img src={LOGO} />
            <nav className="nav">
                <NavLink to="/" className='nav-item'>
                    Home
                </NavLink>
                <NavLink to="/aboutMe" className='nav-item'>
                    About Me
                </NavLink>
                <NavLink to="/portfolio" className='nav-item'>
                    Portfolio
                </NavLink>
                <NavLink to="/services" className='nav-item'>
                    Services
                </NavLink>
            </nav>
            <button className="main-btn header-btn">Contact me</button>
            <button className="burger" onClick={handleMenu}>
                <img src={BURGER} />
            </button>
            {
                menuOpen && <MobileMenu handleMenu ={handleMenu} />  

            }
        </header>

    );
}

export default Header;