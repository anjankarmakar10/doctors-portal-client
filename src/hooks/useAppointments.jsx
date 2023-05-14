import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useAppointments = (email) => {
  const [treatments, setTreatments] = useState(null);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/appointments?email=${email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      const result = await response.json();
      if (result.error) {
        navigate("/", { replace: true });
      }

      setTreatments(result);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return [treatments, setTreatments];
};

export default useAppointments;
