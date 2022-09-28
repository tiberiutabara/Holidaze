// General imports
import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

// Date range
import { DateRange } from "react-date-range"
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"
import { format } from "date-fns"

// Style imports
import './styles/SearchDetails.scss'
import { MdMail } from "react-icons/md"
import { FaMapMarkerAlt, FaCalendar, } from "react-icons/fa" 
import { BsFillPersonFill } from "react-icons/bs"

export default function SearchDetails() {

  // main states
  const [location, setLocation] = useState("Anywhere");
  const [guests, setGuests] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  // open states
  const [openCalendary, setOpenCalendary] = useState(false)
  const [openGuests, setOpenGuests] = useState(false)

  // calendary
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  useEffect(() => {
    setFromDate(format(date[0].startDate, "dd/MM/yyyy"));
    setToDate(format(date[0].endDate, "dd/MM/yyyy"));
  }, [fromDate, toDate, date]);

  // guests
  const handleGuests = (name, operation) => {
    setGuests((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? guests[name] + 1 : guests[name] - 1,
      };
    });
  };

  // submit
  const navigate = useNavigate()

  const onSubmit = () => {
    navigate('/results')

    const data = JSON.stringify({
      location: location, 
      guests: guests, 
      fromDate: fromDate, 
      toDate: toDate
    })
    
    localStorage.setItem('data', data)
  }

  return (
    <div className="search-details">

    <div className="hero">
      <div className="hero-content">
        <h1>Find Your</h1>
        <h2>Perfect Place</h2>

        <p>Search the best hotel deals in Bergen by using the search tool. Always proved to find what is best suited for visitors.</p>

        <Link to="/contact"><MdMail className="icon"/> Reach us to get your hotel listed</Link>
      </div>
    </div>

    <div className="search-form">
      <div className="search-fields">
      <label>
        <p><FaMapMarkerAlt className="fields-icon"/> Location</p>
        <select onChange={(e) => setLocation(e.target.value)}>
          <option value="Anywhere">Anywhere</option>
          <option value="City Center">City Center</option>
          <option value="Urban">Urban</option>
          <option value="Rural">Rural</option>
        </select>
      </label>
      
      <label>
        <p><FaCalendar className="fields-icon"/> Date</p>
        <span onClick={() => setOpenCalendary(!openCalendary)}>
          {fromDate} - {toDate}
        </span>
        <DateRange
          className={`calendary ${openCalendary && 'open-item'}`}
          editableDateInputs={true}
          onChange={(item) => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
          rangeColors={["#D89E1A"]}
        />
      </label>

      <label>
        <p><BsFillPersonFill className="fields-icon"/> Guests</p>
        <span onClick={() => setOpenGuests(!openGuests)}>{`${guests.adult} adult - ${guests.children} children - ${guests.room} room`}</span>
        <div className={`guests ${openGuests && 'open-item'}`}>
          <div>
            <span>Adults</span>
            
            <button
              disabled={guests.adult <= 1}
              onClick={() => handleGuests("adult", "d")}
            >
              -
            </button>
            <span>{guests.adult}</span>
            <button
              disabled={guests.adult >= 10}
              onClick={() => handleGuests("adult", "i")}
            >
              +
            </button>
          </div>

          <div>
            Children
            <button
              disabled={guests.children <= 0}
              onClick={() => handleGuests("children", "d")}
            >
              -
            </button>
            <span>{guests.children}</span>
            <button
              disabled={guests.children >= 10}
              onClick={() => handleGuests("children", "i")}
            >
              +
            </button>
          </div>

          <div>
            Room
            <button
              disabled={guests.room <= 1}
              onClick={() => handleGuests("room", "d")}
            >
              -
            </button>
            <span>{guests.room}</span>
            <button
              disabled={guests.room >= 10}
              onClick={() => handleGuests("room", "i")}
            >
              +
            </button>
          </div>
        </div>
      </label> 
      </div>

      <button className="button" onClick={() => onSubmit()}>Search Rooms</button>
    </div>
  </div>
  );
}
