import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../validations/ContactValidation";
import './styles/Contact.scss'

const {REACT_APP_URL} = process.env

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [category, setCategory] = useState("Hotel Listings");
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(contactSchema) });

  const onSubmit = () => {
    async function addMessage() {
      const messageContent = {
        name: name,
        email: email,
        subject: subject,
        category: category,
        message: message,
      };

      const isValid = await contactSchema.isValid(messageContent);
      isValid && alert("Form submited successfully");

      const add = await fetch(`${REACT_APP_URL}/api/messages`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: messageContent }),
      })

      const addResponse = await add.json()

      console.log(addResponse)
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
      <h2>Don't hesitate to get in touch &#128075;</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <span> Your Name / Company</span> <br />
          <input
            {...register("name")}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name &&<span className="error"><br /> {errors.name.message}</span>}
        </label>
        
        <label>
          <span> Your Email</span> <br />
          <input
            {...register("email")}
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error"><br /> {errors.email.message}</span>}
        </label>
        
        <label>
          <span> Subject Title</span> <br />
          <input
            {...register("subject")}
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          {errors.subject && <span className="error"><br /> {errors.subject.message}</span>}
        </label>
        
        <label>
          <span> Choose Category</span> <br />
          <select
            {...register("category")}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Hotel Listings">Hotel Listings</option>
            <option value="Technical Support">Technical Support</option>
            <option value="Career">Career</option>
          </select>
          {errors.category && <span className="error"><br /> {errors.category.message}</span>}
        </label>
        
        <label className="message">
          <span> Message</span> <br />
          <textarea
            {...register("message")}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {errors.message && <span className="error"><br /> {errors.message.message}</span>}
        </label>
        
        <button className="button">Send message</button>
      </form>
    </div>
  );
}
