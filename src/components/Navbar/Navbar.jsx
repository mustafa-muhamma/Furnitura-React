import { faShoppingBasket, faUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import logo from '../../assets/logo.png'

function Navbar() {
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const [menuOpen, setMenuOpen] = useState(false)

  // sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      if (window.scrollY > 0) {
        nav.classList.add("sticky");
      } else {
        nav.classList.remove("sticky");
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="py-2 bg-transparent fixed top-0 left-0 w-full z-10">
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <NavLink to={"/"} className={'navbarLogo'}>
          <img src={logo} style={{ width: "40px" }} alt="logo" />
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6">
          <li><NavLink to={"/"}>Home</NavLink></li>
          <li><NavLink to={"/about"}>About</NavLink></li>
          <li><NavLink to={"/contact"}>Contact</NavLink></li>
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          {/* User */}
          <NavLink to={'#'}>
            <FontAwesomeIcon icon={faUser} size='xl' />
          </NavLink>

          {/* Cart */}
          <NavLink to={'/cart'} className="relative">
            <FontAwesomeIcon icon={faShoppingBasket} size='xl' />
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#F5C9B0] text-[#1C352D] rounded-full px-2 text-sm font-semibold">
                {totalQuantity}
              </span>
            )}
          </NavLink>

          {/* Hamburger Menu (Mobile only) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl focus:outline-none"
          >
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1C352D] text-[#F9F6F3] absolute top-full left-0 w-full">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li><NavLink to={"/"} onClick={() => setMenuOpen(false)}>Home</NavLink></li>
            <li><NavLink to={"/about"} onClick={() => setMenuOpen(false)}>About</NavLink></li>
            <li><NavLink to={"/contact"} onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
