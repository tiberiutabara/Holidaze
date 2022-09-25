// General imports
import { Link, useNavigate } from "react-router-dom"
import {useEffect, useState} from 'react'
import axios from "axios"

// Styling imports
import Spinner from './Spinner'
import './styles/Enquiries.scss'

// .env
const {REACT_APP_URL} = process.env

export default function Enquiries() {

  // States and vars
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [enquiries, setEnquiries] = useState([])
  const token = window.localStorage.getItem("JWT")

  // Fetch
  useEffect(() => {
    const getEnquiries = async () => {
      try {
        const { data } = await axios.get(`${REACT_APP_URL}/api/enquiries`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        setEnquiries(data.data)
        setLoading(false)
      } catch (err) {
        console.log(err)
        navigate("/login")
      }
    };

    getEnquiries();

  }, [navigate, token])

  return (
    <div className="enquiries">
      {loading && <Spinner />}

      {enquiries.length > 0 ? (
        enquiries && 
        enquiries.map((enquiry) => (

          <Link key={enquiry.id} className="enquiry-card" to={`/enquiry/${enquiry.id}`}>
            <p>for <span>{enquiry.attributes.Hotel}</span></p>
            <h3>{enquiry.attributes.Details.substring(0,30)}{enquiry.attributes.Details.length >= 30 && '...'}</h3>
            <p>by <span>{enquiry.attributes.Name}</span></p>
          </Link>

        ))
      ) : ( !loading &&
        <p>No enquiries</p>
      )}

    </div>
  )
}
