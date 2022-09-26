// General imports
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Style imports
import './styles/DeleteHotel.scss'
import { FaTrashAlt } from "react-icons/fa";

// .env
const { REACT_APP_URL } = process.env;

export default function DeleteHotel() {

  // states and vars
  const [hotel, setHotel] = useState([]);
  const [hotelID, setHotelID] = useState(null);
  const navigate = useNavigate();
  const token = window.localStorage.getItem("JWT");

  // List hotels to delete
  useEffect(() => {
    const getHotel = async () => {
      try {
        const { data } = await axios.get(`${REACT_APP_URL}/api/hotels`);
        setHotel(data.data);
      } catch (err) {
        console.log(err);
      }
    };

    getHotel();
  }, []);

  // Delete hotel
  const deleteHotel = () => {
    async function deleteSelectedHotel() {
      const deleteMessage = await fetch(
        `${REACT_APP_URL}/api/hotels/` + hotelID,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const deleteResponse = await deleteMessage.json();
      console.log(deleteResponse);
    }

    deleteSelectedHotel();
    console.log(hotelID)
    navigate("/");
  };

  return (
    <div className="delete-hotel">
      <h3>Delete a hotel</h3>

      <select onChange={(e) => setHotelID(e.target.value)}>
        {hotel &&
          hotel.map((hotel) => (
            <option key={hotel.id} value={hotel.id}>
              {hotel.attributes.Title}
            </option>
          ))} 
      </select>
      <button
        onClick={() => {
          window.confirm("Are you sure that you want to delete this hotel?") ===
          true
            ? deleteHotel()
            : alert("Delete process cancelled.");
        }}
      >
        <FaTrashAlt />
      </button>
    </div>
  );
}
