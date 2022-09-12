import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function Message() {
  const navigate = useNavigate();

  const { id } = useParams();
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/messages/" + id
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error.</p>;

  // delete

  const deleteData = () => {
    async function deleteMessage() {
      const deleteMessage = await fetch(
        "http://localhost:1337/api/messages/" + id,
        {
          method: "DELETE",
        }
      );

      const deleteResponse = await deleteMessage.json();
      console.log(deleteResponse);
    }

    deleteMessage();
    navigate("/admin");
  };

  return (
    <div className="message">
      <h3>{data.attributes.subject}</h3>
      <p>
        by {data.attributes.name}, email: {data.attributes.email}
      </p>
      <p>Category: {data.attributes.category}</p>
      <br />
      <p>{data.attributes.message}</p>
      <button onClick={() => deleteData()}>Delete</button>
    </div>
  );
}
