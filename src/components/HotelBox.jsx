import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'

export default function HotelBox(props) {

  // Fetch Data
  const { loading, error, data } = useFetch('http://localhost:1337/api/hotels?populate=*')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error.</p>

  return (
    <>
    {data.map(hotel => (

      // Filter Area - set
      hotel.attributes.Area === props.area ?

      <div key={hotel.id} className="hotel-card">
        <h3>{hotel.attributes.Title}</h3>
        <p>{hotel.attributes.Price}</p>
        <Link to={`/Hotel/${hotel.id}`}>Details</Link>
        <br /> <br />
      </div> 
      
      :
      
      props.area === 'Anywhere' ?

      <div key={hotel.id} className="hotel-card">
        <h3>{hotel.attributes.Title}</h3>
        <p>{hotel.attributes.Price}</p>
        <Link to={`/Hotel/${hotel.id}`}>Details</Link>
        <br /> <br />
      </div> 
      
      : null

    ))}
    </>
  )
}
