import "./styles/Footer.scss"
import { FaChevronUp } from "react-icons/fa"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer>
        <ul>
            <li>@2022 | Holidaze AS</li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
        <p onClick={() => window.scrollTo(0, 0)}>Back to top <FaChevronUp /></p>
    </footer>
  )
}
