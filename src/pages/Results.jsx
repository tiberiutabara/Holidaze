import { Link } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'

const HOTELS = gql`
  query getHotels {
    hotels{
      data{

        id,

        attributes{
          Title,
          Price,
          Description,
        }

      }
    }
  }
`

export default function Results() {

  const { loading, error, data } = useQuery(HOTELS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error.</p>

  console.log(data)

  return (
    <div className='results'>
      {data.hotels.data.map(hotel => (
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
