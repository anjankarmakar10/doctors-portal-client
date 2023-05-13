const removeAppointment = (id) => {
  return fetch(`http://localhost:4000/appointments/${id}`, {
    method: "DELETE",
  });
};

export default removeAppointment;
