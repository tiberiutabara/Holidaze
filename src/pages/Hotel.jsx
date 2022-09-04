import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const HOTEL = gql`
  query GetHotel($id: ID!) {
    hotel(id: $id) {
      data {
        id

        attributes {
          Title
          Price
          Description
        }
      }
    }
  }
`;

export default function Hotel() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(HOTEL, {
    variables: { id: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error.</p>;

  console.log(data);

  return (
    <div className="hotel">
      <h3>{data.hotel.data.attributes.Title}</h3>
      <p>{data.hotel.data.attributes.Price}</p>
      <p>{data.hotel.data.attributes.Description}</p>
    </div>
  );
}
