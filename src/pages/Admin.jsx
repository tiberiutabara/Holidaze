import useFetch from '../hooks/useFetch'
 
 export default function Admin() {
  const { loading, error, data } = useFetch('http://localhost:1337/api/messages')
  
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error.</p>

  const deleteData = (messageID) => {

    async function deleteMessage() {
    const deleteMessage = await fetch("http://localhost:1337/api/messages/" + messageID, {
          method: "DELETE"
      });

      const deleteResponse = await deleteMessage.json();
      console.log(deleteResponse)

    }

    deleteMessage()

  }


   return (
     <div>

      <h1>Admin</h1>

      {data.length > 0 ? data && data.map( message => (

        <div key={message.id} className="message-card">
        <h3>{message.attributes.subject}</h3>
        <p>by {message.attributes.name}</p>

        <button onClick={() => deleteData(message.id)}>Delete</button>

        <br /> <br />
        </div> 

      )) : <p>No messages</p>}

     </div>
   )
 }
 