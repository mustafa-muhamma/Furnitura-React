import { faShoppingBasket, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'

function Navbar() {
    const totalQuantity = useSelector(state => state.cart.totalQuantity)
    window.onscroll = () => {
        const nav = document.querySelector("nav");
        if (window.scrollY > 0) {
            nav.classList.add("sticky");
        } else {
            nav.classList.remove("sticky");
        }
    }
    return (
        <nav className='py-2 bg-transparent fixed top-0 left-0 w-full z-10'>
            <div className="container flex items-center justify-between">
                <NavLink to={"/"} className={'navbarLogo'}>
                    <img src={logo} style={{ width: "40px" }} alt="" />
                </NavLink>
                <ul className="flex items-center gap-4">
                    <li>
                        <NavLink to={"/"} >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/about"}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contact"}>Contact</NavLink>
                    </li>
                </ul>
                <div className="navIcons flex items-center gap-2 justify-center">
                    <NavLink to={'#'}>
                        <FontAwesomeIcon icon={faUser} size='xl' />
                    </NavLink>
                    <NavLink to={'/cart'}>
                        <FontAwesomeIcon icon={faShoppingBasket} size='xl' />
                        <span style={{
                            position: "absolute",
                            top: "1px",
                            color: "#F5C9B0",
                            borderRadius: "50%",
                            padding: "2px 6px",
                            fontSize: "15px",
                            fontWeight: "500",
                        }}>{totalQuantity}</span>
                    </NavLink>
                </div>
            </div>
        </nav >
    )
}

export default Navbar
