import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from "axios"

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
    };

    getRecent()
  }, []);

  return (
    <div>
    
    <h2>Newest Listings</h2>

    {loading && <p>Loading...</p>}
    {recent && (
      recent.slice(0,6).map(hotel => (

        <div key={hotel.id} className="hotel-card">
        <h3>{hotel.attributes.Title}</h3>
        <p>{hotel.attributes.Price}</p>
        <Link to={`/Hotel/${hotel.id}`}>Details</Link>
        <br /> <br />
        </div> 

      ))
    )}

    </div>
  )
}
