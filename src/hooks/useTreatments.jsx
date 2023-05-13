import { useEffect, useState } from "react";

const useTreatments = () => {
  const [treatments, setTreatments] = useState(null);

  const getData = async () => {
    const response = await fetch("http://localhost:4000/treatments");
    const result = await response.json();
    setTreatments(result);
  };

  useEffect(() => {
    getData();
  }, []);

  return treatments;
};

export default useTreatments;
