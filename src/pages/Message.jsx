import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from "axios"

const {REACT_APP_URL} = process.env

export default function Message() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [message, setMessage] = useState(null)
  const [loading, setLoading] = useState(true)
  const token = window.localStorage.getItem("JWT")

  useEffect(() => {
    const getMessage = async () => {
      try {
        const { data } = await axios.get(`${REACT_APP_URL}/api/messages/` + id, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        setLoading(false)
        setMessage(data.data)
      } catch (err) {
        console.log(err)
        navigate("/login")
      }
    };

    getMessage()
  }, [id, navigate, token])

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
      )

      const deleteResponse = await deleteMessageData.json()
      console.log(deleteResponse)
    }

    deleteMessage()
    navigate("/admin")
  }

  return (
    <div className="message">

      {loading && <p>Loading...</p>}

      {message && ( <div>
        <h3>{message.attributes.subject}</h3>
        <p>
          by {message.attributes.name}, email: {message.attributes.email}
        </p>
        <p>Category: {message.attributes.category}</p>
        <br />
        <p>{message.attributes.message}</p>
        <button onClick={() => {window.confirm('Are you sure that you want to delete this message?') === true ? deleteData() : alert('Delete process cancelled.')}}>Delete</button>
      </div>)}
    </div>
  )
}
