import { Link, useNavigate } from "react-router-dom"
import {useEffect, useState} from 'react'
import axios from "axios"

const {REACT_APP_URL} = process.env

export default function Enquiries() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [enquiries, setEnquiries] = useState([])
  const token = window.localStorage.getItem("JWT")

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
    <div>

      {loading && <p>Loading...</p>}

      {enquiries.length > 0 ? (
        enquiries &&
        enquiries.map((enquiry) => (

          <div key={enquiry.id} className="enquiry-card">
            <h3>{enquiry.attributes.Name}</h3>
            <p>for {enquiry.attributes.Hotel}</p>
            <Link to={`/enquiry/${enquiry.id}`}>Details</Link>
            <br /> <br />
          </div>

        ))
      ) : ( !loading &&
        <p>No enquiries</p>
      )}
    </div>
  )
}
