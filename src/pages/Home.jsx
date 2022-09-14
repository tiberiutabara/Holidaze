import { Link } from "react-router-dom";
import NewListings from "../components/NewListings";

export default function Home() {

  return (
    <div>Home <br />

      <Link to="/results">Results</Link>
      <Link to="/admin">Admin</Link>
      <Link to="/owner">Owner</Link>

      <NewListings />
    </div>
  )
}
