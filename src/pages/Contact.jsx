import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [category, setCategory] = useState("Hotel Listings");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    async function addMessage() {
      const messageContent = {
        name: name,
        email: email,
        subject: subject,
        category: category,
        message: message,
      };

      const add = await fetch("http://localhost:1337/api/messages", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: messageContent }),
      });

      const addResponse = await add.json();

      console.log(addResponse);
    }

    addMessage();

    setName("");
    setEmail("");
    setSubject("");
    setCategory("Hotel Listings");
    setMessage("");
  };

  return (
    <div className="contact">

      <h1>For collaboration proposals,</h1>
      <h2>Don't heistate to get in touch</h2>
      <br /> <br />

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          {" "}
          <span> Your Name / Company</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <br /> <br />
        <label>
          {" "}
          <span> Your Email</span>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <br /> <br />
        <label>
          {" "}
          <span> Subject Title</span>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </label>

        <br /> <br />
        <label>
          {" "}
          <span> Choose Category</span>
          <select onChange={(e) => setCategory(e.target.value)} required>
            <option value="Hotel Listings">Hotel Listings</option>
            <option value="Bug repport">Bug repport</option>
            <option value="Career">Career</option>
          </select>
        </label>

        <br /> <br />
        <label>
          {" "}
          <span> Message</span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </label>
        
        <br /> <br />
        <button>Send message</button>
      </form>
    </div>
  );
}
