import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";

const { REACT_APP_URL } = process.env;

export default function Enquiry() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [enquiry, setEnquiry] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = window.localStorage.getItem("JWT");

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

  // delete

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
    <div className="enquiry">
      {loading && <Spinner />}

      {enquiry && (
        <div>
          <h3>For: {enquiry.attributes.Name}</h3>
          <p>Rquested hotel: {enquiry.attributes.Hotel}</p>
          <p>Email: {enquiry.attributes.Email}</p>
          <p>
            {enquiry.attributes.Room} Room for {enquiry.attributes.Adults}{" "}
            adults and {enquiry.attributes.Children} children.
          </p>
          <p>From {enquiry.attributes.StartDate}</p>
          <p>To {enquiry.attributes.EndDate}</p>
          <br /> <span>Details:</span>
          <p>{enquiry.attributes.Details}</p>
          <button
            onClick={() => {
              window.confirm(
                "Are you sure that you want to delete this enquiry?"
              ) === true
                ? deleteData()
                : alert("Delete process cancelled.");
            }}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
