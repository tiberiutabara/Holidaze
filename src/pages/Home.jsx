// General imports
import NewListings from "../components/NewListings"
import SearchDetails from "../components/SearchDetails"

// Style imports
import './styles/Home.scss'
import group from '../assets/group.svg'

export default function Home() {

  return (
    <div className="home">
      <SearchDetails />

      <h2 className="new-listings-title">Newest Listings</h2>
      <NewListings />

      <div className="offer">
        <img src={group} alt="Offer group team" className="offer-img"/>
        <div className="offer-details">
          <h1>The perfect Deals</h1>
          <h1>For Your Team</h1>

          <p></p>

          <div className="percent-box">
            <p>Up to</p>
            <h3>20%</h3>
            <p>/room savings</p>
          </div>

          <div className="percent-box">
            <p>Including</p>
            <h3>30%</h3>
            <p>/food deals</p>
          </div>
        </div>
      </div>

    </div>
  )
}
