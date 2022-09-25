// General imports
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

// Style imports
import Spinner from "../components/Spinner";
import './styles/Message.scss'
import { FaTrashAlt } from "react-icons/fa";

// .env
const { REACT_APP_URL } = process.env;

export default function Message() {

  // states and vars
  const navigate = useNavigate();
  const { id } = useParams();
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = window.localStorage.getItem("JWT");

  // fetch
  useEffect(() => {
    const getMessage = async () => {
      try {
        const { data } = await axios.get(
          `${REACT_APP_URL}/api/messages/` + id,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setLoading(false);
        setMessage(data.data);
      } catch (err) {
        console.log(err);
        navigate("/login");
      }
    };

    getMessage();
  }, [id, navigate, token]);

  // delete
  const deleteData = () => {
    async function deleteMessage() {
      const deleteMessageData = await fetch(
        `${REACT_APP_URL}/api/messages/` + id,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const deleteResponse = await deleteMessageData.json();
      console.log(deleteResponse);
    }

    deleteMessage();
    navigate("/admin");
  };

  return (
    <div className="message">
      {loading && <Spinner />}

      {message && (
        <div>
          <h3>{message.attributes.subject}

          <button
            onClick={() => {
              window.confirm(
                "Are you sure that you want to delete this message?"
              ) === true
                ? deleteData()
                : alert("Delete process cancelled.");
            }}
          >
            <FaTrashAlt />
          </button>
          
          </h3>
          <p> On - <span>{message.attributes.category}</span></p>
          <p> By - <span>{message.attributes.name}</span></p>
          <p> Email - <span>{message.attributes.email}</span></p>
          <p className="description">{message.attributes.message}</p>

          
        </div>
      )}
    </div>
  );
}
