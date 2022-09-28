// General imports
import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from "axios"

// Style imports
import Spinner from './Spinner'
import './styles/HotelBox.scss'
import './styles/NewListings.scss'
import { AiFillRightCircle } from "react-icons/ai"

// .env
const {REACT_APP_URL} = process.env

export default function NewListings() {
  const [recent, setRecent] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getRecent = async () => {
      try {
        const { data } = await axios.get(`${REACT_APP_URL}/api/hotels?populate=*&sort=publishedAt:desc`)
        setLoading(false)
        setRecent(data.data)
      } catch (err) {
        console.log(err)
      }
    }

    getRecent()
  }, [])

  return (
    <div className="new-hotels">

    {loading && <Spinner />}

    {recent && (
      recent.slice(0,6).map(hotel => (

        <Link to={`/Hotel/${hotel.id}`} key={hotel.id} className="hotel-card">
        <img src={hotel.attributes.Thumbnail.data.attributes.url} alt={hotel.attributes.Title}/>
        
        <p>From <span>{hotel.attributes.Price}kr</span> /night</p>
        <h3>{hotel.attributes.Title}</h3>
        <p>{hotel.attributes.Area}</p>

        <AiFillRightCircle className='arrow'/>
        </Link>

      ))
    )}

    </div>
  )
}
