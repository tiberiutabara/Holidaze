// imports
import { useState, useEffect } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import logo from "../assets/logo.png"
import { HiMenuAlt3, HiX } from "react-icons/hi"
import "./styles/Header.scss"

export default function Header() {

  // component functionality

  const token = window.localStorage.getItem("JWT")
  const role = localStorage.getItem('role')
  const navigate = useNavigate()
  const location = useLocation()

  const logout = () => {
    localStorage.removeItem('JWT')
    localStorage.removeItem('role')
    navigate('/')
  }

  // animations + reset menu on resize

  const [phoneMenu, setPhoneMenu] = useState(null)

  const [dimensions, setDimensions] = useState(window.innerWidth)
  const handleResize = () => {
    setDimensions(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => { window.removeEventListener('resize', handleResize) }
  })

  useEffect(() => {
    dimensions > 900 && setPhoneMenu(null)
  }, [dimensions])

  return (
    <header>

        <Link to="/"><img src={logo} alt="Logo" /></Link>

        <button className="hamburger" onClick={() => setPhoneMenu(!phoneMenu)}>{!phoneMenu ? <HiMenuAlt3 className="Switch"/> : <HiX className="Switch"/>}</button>
      
        <ul className={phoneMenu ? 'phoneMenu Open' : phoneMenu === false ? 'phoneMenu Close' : 'menu'} onClick={() => setPhoneMenu(null)}>

          { role === 'admin' ?
            <li className={location.pathname === "/admin" ? "current-page" : null}><Link to="/admin">Admin</Link></li>

            : role === 'owner' ?
            <li className={location.pathname === "/owner" ? "current-page" : null}><Link to="/owner">Admin</Link></li>

            : null
          }

            <li className={location.pathname === "/" ? "current-page" : null}><Link to="/">Home</Link></li>
            <li className={location.pathname === "/about" ? "current-page" : null}><Link to="/about">About</Link></li>
            <li className={location.pathname === "/contact" ? "current-page" : null}><Link to="/contact">Contact</Link></li>

            { !token ? 
            <li className="log-button"><Link to ="/login"><button className="button">Log In</button></Link></li>
            : <li className="log-button"><Link to ="/"><button onClick={() => logout()} className="button">Log Out</button></Link></li>
            }
        </ul>

    </header>
  )
}
