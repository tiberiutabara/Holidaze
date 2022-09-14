import { useState, useEffect } from 'react'
import HotelBox from '../components/HotelBox'
import axios from "axios";

const {REACT_APP_URL} = process.env

export default function Results() {
  const [area, setArea] = useState('Anywhere')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    const getResults = async () => {
      try {
        const { data } = await axios.get(`${REACT_APP_URL}/api/hotels?populate=*`)
        setLoading(false)
        setResults(data.data)
      } catch (err) {
        console.log(err)
      }
    };

    getResults()
  }, []);

  return (
    <div className='results'>

    <form onSubmit={handleSubmit}>


    <label> <span>Choose Area: </span>
        <select 
          id="area" 
          required
          onChange={(e) => setArea(e.target.value)}
        >
            <option value="Anywhere">Anywhere</option>
            <option value="City Center">City Center</option>
            <option value="Urban">Urban</option>
            <option value="Rural">Rural</option>
        </select>
    </label>

    <button type='submit'>Submit</button>
    </form>

      {loading && <p>Loading...</p>}

      {results && <HotelBox area={area} data={results}/>}
    </div> 
  )
}
