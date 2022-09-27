// General imports
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from "axios"
import Enquiry from "../components/Enquiry"

// Style imports
import './styles/Hotel.scss'
import Spinner from '../components/Spinner'
import Gallery from "../components/Gallery"

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

          <div className="title">
            <h3>{hotel.attributes.Title}</h3>
            <p>{hotel.attributes.Price}</p>
          </div>

          <div className="options">
          {hotel.attributes.WiFi && <p>WiFi</p>}
          {hotel.attributes.Pets && <p>Pets Allowed</p>}
          {hotel.attributes.Parking && <p>Parking</p>}
          {hotel.attributes.Bathroom && <p>Private Bathroom</p>}
          {hotel.attributes.Roomservice && <p>Room Service</p>}
          {hotel.attributes.Food && <p>Restaurant</p>}
          </div>

          <p className="description">{hotel.attributes.Description}</p>

          <Enquiry hotel={hotel && hotel.attributes.Title} /> <br /><br />

          </div>)}
    </div>
  )
}
