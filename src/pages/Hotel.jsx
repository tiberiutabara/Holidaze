// General imports
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from "axios"
import Enquiry from "../components/Enquiry"

// Style imports
import './styles/Hotel.scss'
import Spinner from '../components/Spinner'
import Gallery from "../components/Gallery"
import { FaWifi, FaDog, FaParking, FaBath, FaBed, FaUtensils } from "react-icons/fa";

// .env
const {REACT_APP_URL} = process.env

export default function Hotel() {
  const { id } = useParams()

  const [hotel, setHotel] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getHotel = async () => {
      try {
        const { data } = await axios.get(`${REACT_APP_URL}/api/hotels/` + id + "?populate=*")
        setLoading(false)
        setHotel(data.data)

      } catch (err) {
        console.log(err)
      }
    };

    getHotel()
    
  }, [id]);
  

  return (
    <div>
          {loading && <Spinner />}

          {hotel && (<div className="hotel">

          <Gallery data={hotel} />

          <div className="hotel-info">

            <div className="title">
              <h3>{hotel.attributes.Title}</h3>
              <p>From <span>{hotel.attributes.Price}kr</span> /night</p>
            </div>

            <div className="options">
            {hotel.attributes.WiFi && <div><FaWifi className="icon"/> <span>WiFi</span></div>}
            {hotel.attributes.Pets && <div><FaDog className="icon"/> <span>Pets Allowed</span></div>}
            {hotel.attributes.Parking && <div><FaParking className="icon"/> <span>Parking</span></div>}
            {hotel.attributes.Bathroom && <div><FaBath className="icon"/> <span>Private Bathroom</span></div>}
            {hotel.attributes.Roomservice && <div><FaBed className="icon"/> <span>Room Service</span></div>}
            {hotel.attributes.Food && <div><FaUtensils className="icon"/> <span>Restaurant</span></div>}
            </div>

            <p className="description">{hotel.attributes.Description}</p>

          </div>

          <Enquiry hotel={hotel && hotel.attributes.Title} /> <br /><br />

          </div>)}
    </div>
  )
}
