// General imports
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

// Style imports
import Spinner from "../components/Spinner";
import "./styles/Admin.scss";
import { HiSearchCircle } from "react-icons/hi";

// .env
const { REACT_APP_URL } = process.env;

export default function Admin() {
  // States
  const navigate = useNavigate();
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);
  const [filteredMessages, setFilteredMessages] = useState([]);
  const token = window.localStorage.getItem("JWT");

  // Message fetch
  useEffect(() => {
    const getMessages = async () => {
      try {
        const { data } = await axios.get(`${REACT_APP_URL}/api/messages`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMessages(data.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        navigate("/login");
      }
    };

    getMessages();
  }, [navigate, token]);

  // Category filter
  useEffect(() => {
    if (category === "All") {
      setFilteredMessages(messages);
    } else {
      const filterCategory = messages.filter(
        (message) => message.attributes.category === category
      );
      setFilteredMessages(filterCategory);
    }
  }, [category, messages]);

  return (
    <div className="admin">
      <h1>Inbox</h1>

      <label>
        <HiSearchCircle className="search-icon"/>
        <select
          id="area"
          required
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Hotel Listings">Hotel Listings</option>
          <option value="Technical Support">Technical Support</option>
          <option value="Career">Career</option>
        </select>
      </label>

      {loading && <Spinner />}

      {filteredMessages.length > 0
        ? filteredMessages &&
          filteredMessages.map((message) => (
            <Link key={message.id} className="message-card" to={`/message/${message.id}`}>
              <p>{message.attributes.category}</p>
              <h3>{message.attributes.subject}</h3>
              <p><span>by</span> {message.attributes.name}</p>
            </Link>
          ))
        : !loading && <p className="empty">No messages</p>}
    </div>
  );
}
