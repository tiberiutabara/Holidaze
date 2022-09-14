import { Link } from 'react-router-dom'

export default function HotelBox(props) {

  const data = props.data;

  return (
    <>
    {data.map(hotel => (

      // Filter Area - set
      hotel.attributes.Area === props.area || props.area === 'Anywhere' ?

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
