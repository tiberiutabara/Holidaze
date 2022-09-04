import { useQuery, gql } from "@apollo/client"
import { Link } from "react-router-dom";

const AREAS = gql`
    query GetAreas{
        areas{
            data{
                id,

                attributes{
                    name,
                }
            }
        }
    }
`

export default function ResultsFilter() {

    const { loading, error, data } = useQuery(AREAS)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error.</p>

  return (
    <div className="areas">
        <span>Filter areas:</span> <br /> <br />
        {data.areas.data.map(area => (
            <Link key={area.id} to={`/area/${area.id}`}>
                {area.attributes.name}<br /> <br />
            </Link>
        ))}
    </div>
  )
}
