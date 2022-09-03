import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"

export default function Hotel() {
  const { id } = useParams()
  const { loading, error, data } = useFetch('http://localhost:1337/api/hotels/' + id + '?populate=*')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error.</p>

  console.log(data)

  return (
    <div className="hotel">
          <h3>{data.attributes.Title}</h3>
          <p>{data.attributes.Price}</p>

          <p>{data.attributes.Description}</p>
    </div>
  )
}
