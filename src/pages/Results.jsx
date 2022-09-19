import { useState, useEffect } from "react";
import HotelBox from "../components/HotelBox";
import axios from "axios";
import ResultsDetails from "../components/ResultsDetails";
import { useLocation } from "react-router-dom";
import SearchSpecific from "../components/SearchSpecific";

const { REACT_APP_URL } = process.env;

export default function Results() {
  const loc = useLocation();

  const [area, setArea] = useState(loc.state.location);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getResults = async () => {
      try {
        const { data } = await axios.get(
          `${REACT_APP_URL}/api/hotels?populate=*`
        );
        setLoading(false);
        setResults(data.data);
      } catch (err) {
        console.log(err);
      }
    };

    getResults();
  }, []);

  return (
    <div className="results">
      <ResultsDetails
        location={loc.state.location}
        guests={loc.state.guests}
        fromDate={loc.state.fromDate}
        toDate={loc.state.toDate}
      /> 
      <br />

      <SearchSpecific /> 
      <br />

      <label>
        {" "}
        <span>Choose Area: </span>
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

      {loading && <p>Loading...</p>}

      {results && (
        <HotelBox
          area={area}
          data={results}
          location={loc.state.location}
          guests={loc.state.guests}
          fromDate={loc.state.fromDate}
          toDate={loc.state.toDate}
        />
      )}
    </div>
  );
}
