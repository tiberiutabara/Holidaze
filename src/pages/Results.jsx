import { useState } from 'react'
import HotelBox from '../components/HotelBox'

export default function Results() {
  const [area, setArea] = useState('City Center')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='results'>

    <form onSubmit={handleSubmit}>


    <label> <span>Choose Area: </span>
        <select id="area" 
          required
          onChange={(e) => setArea(e.target.value)}
          value={area}
        >
            <option value={"Anywhere"}>Anywhere</option>
            <option value="City Center">City Center</option>
            <option value="Outskirts">Outskirts</option>
            <option value="Camping">Camping</option>
        </select>
    </label>

    <button type='submit'>Submit</button>
    </form>

      <HotelBox area={area} />
    </div> 
  )
}
