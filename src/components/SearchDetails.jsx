// General imports
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

// Date range
import { DateRange } from "react-date-range"
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"
import { format } from "date-fns"

// Style imports
import './styles/SearchDetails.scss'
import hero from '../assets/hero.jpg'

export default function SearchDetails() {

  // main states
  const [location, setLocation] = useState("Anywhere");
  const [guests, setGuests] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

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
      <img src={hero} alt="Hero landing pool" />
    </div>

    <div className="search-form">
      <label>
        <span> Location </span>
        <select onChange={(e) => setLocation(e.target.value)}>
          <option value="Anywhere">Anywhere</option>
          <option value="City Center">City Center</option>
          <option value="Urban">Urban</option>
          <option value="Rural">Rural</option>
        </select>
      </label>{" "}
      
      <label>
        {" "}
        <span>
          {fromDate} to {toDate}
        </span>
        <DateRange
          className="calendar"
          editableDateInputs={true}
          onChange={(item) => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
          rangeColors={["#D89E1A"]}
        />
      </label>{" "}

      <label>
        {" "}
        <span>{`${guests.adult} adult . ${guests.children} children . ${guests.room} room`}</span>
        <div className="guests">
          <span>
            Adults
            
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
          </span>{" "}

          <span>
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
          </span>{" "}

          <span>
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
          </span>
        </div>
      </label>
      <button onClick={() => onSubmit()}>Search</button>
    </div>
  </div>
  );
}
