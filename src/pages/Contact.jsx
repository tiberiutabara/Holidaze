import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../validations/ContactValidation";

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
      <h2>Don't hesitate to get in touch</h2>
      <br /> <br />
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <label>
          {" "}
          <span> Your Name / Company</span>
          <input
            {...register("name")}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </label>
        <br /> <br />
        <label>
          {" "}
          <span> Your Email</span>
          <input
            {...register("email")}
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </label>
        <br /> <br />
        <label>
          {" "}
          <span> Subject Title</span>
          <input
            {...register("subject")}
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          {errors.subject && <span>{errors.subject.message}</span>}
        </label>
        <br /> <br />
        <label>
          {" "}
          <span> Choose Category</span>
          <select
            {...register("category")}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Hotel Listings">Hotel Listings</option>
            <option value="Technical Support">Technical Support</option>
            <option value="Career">Career</option>
          </select>
          {errors.category && <span>{errors.category.message}</span>}
        </label>
        <br /> <br />
        <label>
          {" "}
          <span> Message</span>
          <textarea
            {...register("message")}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {errors.message && <span>{errors.message.message}</span>}
        </label>
        <br /> <br />
        <button>Send message</button>
      </form>
    </div>
  );
}
