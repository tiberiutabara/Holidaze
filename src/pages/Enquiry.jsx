// Gneral imports
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";

// Style imports
import "./styles/Enquiry.scss";
import { FaTrashAlt } from "react-icons/fa";

// .env
const { REACT_APP_URL } = process.env;

export default function Enquiry() {
  // States and vars
  
  const navigate = useNavigate();
  const { id } = useParams();
  const [enquiry, setEnquiry] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = window.localStorage.getItem("JWT");

  // Fetch
  useEffect(() => {
    const getEnquiry = async () => {
      try {
        const { data } = await axios.get(
          `${REACT_APP_URL}/api/enquiries/` + id,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setLoading(false);
        setEnquiry(data.data);
      } catch (err) {
        console.log(err);
        navigate("/login");
      }
    };

    getEnquiry();
  }, [id, navigate, token]);

  // Delete
  const deleteData = () => {
    async function deleteEnquiry() {
      const deleteEnquiryData = await fetch(
        `${REACT_APP_URL}/api/enquiries/` + id,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const deleteResponse = await deleteEnquiryData.json();
      console.log(deleteResponse);
    }

    deleteEnquiry();
    navigate("/owner");
  };

  return (
    <>
      {loading && <Spinner />}

      {enquiry && (
        <div className="enquiry">
          <h2>{enquiry.attributes.Name}</h2>
          <p className="mail">
            <span>{enquiry.attributes.Email}</span>
          </p>

          <button
            onClick={() => {
              window.confirm(
                "Are you sure that you want to delete this enquiry?"
              ) === true
                ? deleteData()
                : alert("Delete process cancelled.");
            }}
          >
            <FaTrashAlt />
          </button>

          <div className="content">
            <p>
              Request made for <span>{enquiry.attributes.Hotel}</span> hotel on{" "}
              <span>{enquiry.attributes.Room}</span> room for{" "}
              <span>{enquiry.attributes.Adults}</span> adults and{" "}
              <span>{enquiry.attributes.Children}</span> children{" "}
            </p>
            <p>
              From <span>{enquiry.attributes.StartDate}</span>
            </p>
            <p>
              To <span>{enquiry.attributes.EndDate}</span>
            </p>
            <p>
              Details:{" "}
              <span className="details"> {enquiry.attributes.Details} </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
