import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default async function Admin() {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/messages"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error.</p>;

  return (
    <div>
      <h1>Admin</h1>

      {data.length > 0 ? (
        data &&
        data.map((message) => (
          <div key={message.id} className="message-card">
            <h3>{message.attributes.subject}</h3>
            <p>by {message.attributes.name}</p>
            <Link to={`/message/${message.id}`}>Details</Link>
            <br /> <br />
          </div>
        ))
      ) : (
        <p>No messages</p>
      )}
    </div>
  );
}
