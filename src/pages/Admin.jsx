import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const {REACT_APP_URL} = process.env

export default function Admin() {
  const navigate = useNavigate();
  const [category, setCategory] = useState('All')
  const [loading, setLoading] = useState(true)
  const [messages, setMessages] = useState([]);
  const token = window.localStorage.getItem("JWT");

  useEffect(() => {
    const getMessages = async () => {
      try {
        const { data } = await axios.get(`${REACT_APP_URL}/api/messages`, {
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

      <label> <span>Category: </span>
        <select 
          id="area" 
          required
          onChange={(e) => setCategory(e.target.value)}
        >
            <option value="All">All</option>
            <option value="Hotel Listings">Hotel Listings</option>
            <option value="Technical Support">Technical Support</option>
            <option value="Career">Career</option>
        </select>
      </label>

      {loading && <p>Loading...</p>}

      {messages.length > 0 ? (
        messages &&
        messages.map((message) => (

        message.attributes.category === category || category === 'All' ?

          <div key={message.id} className="message-card">
            <p>{message.attributes.category}</p>
            <h3>{message.attributes.subject}</h3>
            <p>by {message.attributes.name}</p>
            <Link to={`/message/${message.id}`}>Details</Link>
            <br /> <br />
          </div>

        : <p>No messages on this category</p>

        ))
      ) : ( !loading &&
        <p>No messages</p>
      )}
    </div>
  );
}
