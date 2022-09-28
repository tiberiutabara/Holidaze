// General imports
import { Link } from 'react-router-dom'

// Style imports
import './styles/HotelBox.scss'
import { AiFillRightCircle } from "react-icons/ai"

export default function HotelBox(props) {

  const data = props.data;

  return (
    <>
    {data.map(hotel => (

      // Filter Area - set
      hotel.attributes.Area === props.area || props.area === 'Anywhere' ?

      <Link to={`/Hotel/${hotel.id}`} key={hotel.id} className="hotel-card">
        <img src={hotel.attributes.Thumbnail.data.attributes.url} alt={hotel.attributes.Title}/>
        
        <p>From <span>{hotel.attributes.Price}kr</span> /night</p>
        <h3>{hotel.attributes.Title}</h3>
        <p>{hotel.attributes.Area}</p>

        <AiFillRightCircle className='arrow'/>
      </Link>

      : null 

    ))}
    </>
  )
}
