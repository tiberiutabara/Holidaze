import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function Admin() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true)
  const [messages, setMessages] = useState([]);
  const token = window.localStorage.getItem("JWT");

  useEffect(() => {
    const getMessages = async () => {
      try {
        const { data } = await axios.get("http://localhost:1337/api/messages", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMessages(data.data);
        setLoading(false)
      } catch (err) {
        console.log(err)
        navigate("/login");
      }
    };

    getMessages();
  }, [navigate, token]);

  return (
    <div>
      <h1>Admin</h1>

      {loading && <p>Loading...</p>}

      {messages.length > 0 ? (
        messages &&
        messages.map((message) => (
          <div key={message.id} className="message-card">
            <h3>{message.attributes.subject}</h3>
            <p>by {message.attributes.name}</p>
            <Link to={`/message/${message.id}`}>Details</Link>
            <br /> <br />
          </div>
        ))
      ) : ( !loading &&
        <p>No messages</p>
      )}
    </div>
  );
}
