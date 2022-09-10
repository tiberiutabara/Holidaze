import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

export default function NewListings() {

    // Fetch Data
  const { loading, error, data } = useFetch('http://localhost:1337/api/hotels?populate=*&sort=updatedAt:desc')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error.</p>

  return (
    <div>
    
    <h2>Newest Listings</h2>

    {data.slice(0,6).map(hotel => (

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
