import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { useEffect } from "react";
import { useState } from "react";

export default function Admin() {
  const navigate = useNavigate()
  const [messages, setMessages] = useState([])
  const token = window.localStorage.getItem('JWT')

  useEffect(() => {

    if (token == null) {
      navigate('/login')
    } else {
    const getMessages = async () => {
      const { data } = await axios.get("http://localhost:1337/api/messages", {
        headers: {
          Authorization:
            `Bearer ${token}`,
        },
      })

      setMessages(data.data)
    }

    getMessages()

  }}, [])

  return (
    <div>
      <h1>Admin</h1>

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
      ) : (
        <p>No messages</p>
      )}
    </div>
  );
}
