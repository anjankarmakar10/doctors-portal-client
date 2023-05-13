const addAppointment = (data) => {
  return fetch("http://localhost:4000/appointments", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export default addAppointment;
