// General imports
import { useState, useEffect } from "react"
import HotelBox from "../components/HotelBox"
import axios from "axios"
import SearchSpecific from "../components/SearchSpecific"
import { useNavigate } from "react-router-dom"

// Style imports
import Spinner from "../components/Spinner"
import './styles/Results.scss'

// .env
const { REACT_APP_URL } = process.env

export default function Results() {

  // vars
  const navigate = useNavigate()
  const data = JSON.parse(localStorage.getItem('data'))

  // redirect
  useEffect(() => {
      if (!data){
        alert('Please insert search data before entering this page')
        navigate("/")
     }
  },[data, navigate])

  // states
  const [area, setArea] = useState(data ? data.location : 'Anywhere')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(true)

  // fetch
  useEffect(() => {
    const getResults = async () => {
      try {
        const { data } = await axios.get(
          `${REACT_APP_URL}/api/hotels?populate=*`
        );
        setLoading(false)
        setResults(data.data)
      } catch (err) {
        console.log(err)
      }
    }

    getResults()

  }, [])

  return (
    <div className="results"> 
      <SearchSpecific data={results && results}/> 


      <div className="results-title">
        <h2>Results</h2>

        <label className="filter-hotels">
          <span>Area:</span>
          <select
            id="area"
            required
            onChange={(e) => setArea(e.target.value)}
            value={area}
          >
            <option value="Anywhere">Anywhere</option>
            <option value="City Center">City Center</option>
            <option value="Urban">Urban</option>
            <option value="Rural">Rural</option>
          </select>
        </label>
      </div>

      {loading && <Spinner />}

      <div className="results-hotels">
        {results && data ? (
          <HotelBox
            area={area}
            data={results}
            location={data.location}
            guests={data.guests}
            fromDate={data.fromDate}
            toDate={data.toDate}
          />
        ) : null}
      </div>
      
    </div> 
  )
} 
