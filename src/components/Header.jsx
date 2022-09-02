// imports
import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import "./Header.scss"
import { FaMoon } from 'react-icons/fa'

export default function Header() {
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
              <li><Link to ="/login"><button className="button">Log In</button></Link></li>
              <li><button className="switch"><FaMoon /></button></li>
          </ul>
        </div>
    </header>
  )
}
