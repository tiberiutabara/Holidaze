import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

export default function Results() {

  const { loading, error, data } = useFetch('http://localhost:1337/api/hotels?populate=*')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error.</p>

  console.log(data)

  return (
    <div className='results'>
      {data.map(hotel => (
        <div key={hotel.id} className="hotel-card">
          <h3>{hotel.attributes.Title}</h3>
          <p>{hotel.attributes.Price}</p>

          <Link to={`/Hotel/${hotel.id}`}>Details</Link>
          <br /> <br />
        </div>
      ))}
    </div>
  )
}
