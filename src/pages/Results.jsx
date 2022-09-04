import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import ResultsFilter from "../components/ResultsFilter";

const HOTELS = gql`
  query getHotels {
    hotels {
      data {
        id

        attributes {
          Title
          Price
          Area
          Description
        }
      }
    }
  }
`;

export default function Results() {
  const { loading, error, data } = useQuery(HOTELS);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error.</p>

  console.log(data.hotels.data);

  return (
    <>
    <ResultsFilter />

    <div className="results">
      {data.hotels.data.map((hotel) => ( 
        
        // Filter Area
        hotel.attributes.Area === 'Camping' ?

        <div key={hotel.id} className="hotel-card">
          <h3>{hotel.attributes.Title}</h3>
          <p>{hotel.attributes.Price}</p>
          <h4>{hotel.attributes.Area}</h4>
          <Link to={`/Hotel/${hotel.id}`}>Details</Link>
          <br /> <br />
        </div>

        : null
      ))}
    </div>
    </>
  );
}
