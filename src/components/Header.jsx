// imports
import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import logo from "../assets/logo.png"
import "./styles/Header.scss"
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Header() {

  // component functionality

  const token = window.localStorage.getItem("JWT")
  const role = localStorage.getItem('role')
  const navigate = useNavigate()

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
      
        <ul className={phoneMenu ? 'phoneMenu Open' : phoneMenu === false ? 'phoneMenu Close' : 'menu'} onClick={() => setPhoneMenu(false)}>

          { role === 'admin' ?
            <li><Link style={{color: '#D89E1A'}} to="/admin">Admin</Link></li>

            : role === 'owner' ?
            <li><Link style={{color: '#D89E1A'}} to="/owner">Admin</Link></li>

            : null
          }

            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>

            { !token ? 
            <li className="log-button"><Link to ="/login"><button className="button">Log In</button></Link></li>
            : <li className="log-button"><Link to ="/"><button onClick={() => logout()} className="button">Log Out</button></Link></li>
            }
        </ul>

    </header>
  )
}
