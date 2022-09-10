 import React from 'react'
 import useFetch from '../hooks/useFetch'
 
 export default function Admin() {

  const { loading, error, data } = useFetch('http://localhost:1337/api/messages')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error.</p>

   return (
     <div>

      <h1>Admin</h1>

      {data.map(message => (

        <div key={message.id} className="message-card">
        <h3>{message.attributes.subject}</h3>
        <p>by {message.attributes.name}</p>

        <br /> <br />
        </div> 

      ))}

     </div>
   )
 }
 