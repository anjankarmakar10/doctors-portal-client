import { useEffect, useState } from "react";

const useAppointments = () => {
  const [treatments, setTreatments] = useState(null);

  const getData = async () => {
    const response = await fetch("http://localhost:4000/appointments");
    const result = await response.json();
    setTreatments(result);
  };

  useEffect(() => {
    getData();
  }, []);

  return [treatments, setTreatments];
};

export default useAppointments;
