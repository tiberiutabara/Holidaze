import { Link } from "react-router-dom";
import NewListings from "../components/NewListings";
import SearchDetails from "../components/SearchDetails";

export default function Home() {

  return (
    <div>Home <br />

      <Link to="/results">Results</Link>
      <Link to="/admin">Admin</Link>
      <Link to="/owner">Owner</Link>

      <br /><br />

      <SearchDetails />

      <br /><br />

      <NewListings />
    </div>
  )
}
