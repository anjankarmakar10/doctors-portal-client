const updateAppointment = (id, data) => {
  return fetch(`http://localhost:4000/appointments/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export default updateAppointment;
