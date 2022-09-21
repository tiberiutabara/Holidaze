import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { enquirySchema } from "../validations/EnquiryValidation";

const { REACT_APP_URL } = process.env;

export default function Enquiry(props) {
  const navigate = useNavigate(); // use on onsubmit
  const data = JSON.parse(localStorage.getItem("data"));

  const currentHotel = props.hotel;

  const [fromDate, setFromDate] = useState(data ? data.fromDate : "");
  const [toDate, setToDate] = useState(data ? data.toDate : "");
  const [adults, setAdults] = useState(data ? data.guests.adult : 1);
  const [children, setChildren] = useState(data ? data.guests.children : 0);
  const [room, setRoom] = useState(data ? data.guests.room : 1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(enquirySchema) });

  const onSubmit = () => {
    const enquiryContent = {
      Name: name,
      Email: email,
      Details: details,
      Hotel: currentHotel,
      StartDate: fromDate,
      EndDate: toDate,
      Adults: adults,
      Children: children,
      Room: room,
    };

    async function addEnquiry() {
      const add = await fetch(`${REACT_APP_URL}/api/enquiries`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: enquiryContent }),
      });

      const addResponse = await add.json();
      console.log(addResponse);
    }

    addEnquiry();

    const isValid = enquirySchema.isValid(enquiryContent);
    isValid && alert("Booking complete");
    isValid && navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <input
            {...register("from")}
            type="text"
            placeholder="Starting date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
          {errors.from && <span>{errors.from.message}</span>}
        </label>

        <label>
          <input
            {...register("to")}
            type="text"
            placeholder="Ending date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
          {errors.to && <span>{errors.to.message}</span>}
        </label>

        <label>
          {" "}
          <span>Adults</span>
          <input
            {...register("adults")}
            type="number"
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
          />
          {errors.adults && <span>{errors.adults.message}</span>}
        </label>

        <label>
          {" "}
          <span>Children</span>
          <input
            {...register("children")}
            type="number"
            value={children}
            onChange={(e) => setChildren(e.target.value)}
          />
          {errors.children && <span>{errors.children.message}</span>}
        </label>

        <label>
          {" "}
          <span>Room</span>
          <input
            {...register("room")}
            type="number"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />
          {errors.room && <span>{errors.room.message}</span>}
        </label>

        <label>
          <input
            {...register("name")}
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </label>

        <label>
          <input
            {...register("email")}
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </label>

        <label>
          <textarea
            {...register("details")}
            placeholder="Tell us more details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          ></textarea>
          {errors.details && <span>{errors.details.message}</span>}
        </label>

        <button>Book Now</button>
      </form>
    </div>
  );
}
