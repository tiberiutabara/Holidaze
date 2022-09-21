// imports
import { Link, useNavigate } from "react-router-dom"
import logo from "../assets/logo.png"
import "./Header.scss"
import { FaMoon } from 'react-icons/fa'

export default function Header() {
  const token = window.localStorage.getItem("JWT")
  const navigate = useNavigate()

  const logout = () => {
    window.localStorage.removeItem('JWT')
    navigate('/')
  }

  return (
    <header>

        <Link to="/"><img src={logo} alt="Logo" /></Link>
        
        <div className="menu">
          <ul className="navigation">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
          </ul>

          <ul className="options">

            { !token ? 
              <li><Link to ="/login"><button className="button">Log In</button></Link></li>
              : <li><Link to ="/"><button onClick={() => logout()} className="button">Log Out</button></Link></li>
            }
              <li><button className="switch"><FaMoon /></button></li>
          </ul>
        </div>
    </header>
  )
}
