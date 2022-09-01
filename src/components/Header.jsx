// imports
import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

export default function Header() {
  return (
    <div className='site-header'>

        <Link to="/"><img src={logo} alt="Logo" /></Link>
        
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>

        <ul>
            <li><button><Link to ="/login">Log In</Link></button></li>
            <li><button>Mode</button></li>
        </ul>
    </div>
  )
}
