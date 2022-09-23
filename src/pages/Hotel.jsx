import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from "axios"
import Enquiry from "../components/Enquiry"

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
          <Enquiry hotel={hotel && hotel.attributes.Title} /> <br /><br />

          {loading && <p>Loading...</p>}

          {hotel && (<div className="hotel">

          <h3>{hotel.attributes.Title}</h3>
          <p>{hotel.attributes.Price}</p>

          {hotel.attributes.WiFi && <p>WiFi</p>}
          {hotel.attributes.Pets && <p>Pets Allowed</p>}
          {hotel.attributes.Parking && <p>Parking</p>}
          {hotel.attributes.Bathroom && <p>Private Bathroom</p>}
          {hotel.attributes.Roomservice && <p>Room Service</p>}
          {hotel.attributes.Food && <p>Restaurant</p>}


          <p>{hotel.attributes.Description}</p>

          <p>Thumbnail:</p>

          <img src={hotel.attributes.Thumbnail.data.attributes.url} alt={hotel.attributes.Title} />

          <p>Gallery:</p> 


          <p>{hotel.attributes.Gallery.data.map(img => (
            <img key={img.id} src={img.attributes.url} alt={img.attributes.name}/>
          ))}</p>

          </div>)}
    </div>
  )
}
