import { useRef, useState } from "react";
import styled from "styled-components";
import { images } from "../../../constants";
import done from "../../../assets/icons/done.png";
import { useData } from "../../../context/DataProvider";
export const AppointmentFrom = ({ isOpen }) => {
  const [isSumbit, setIsSubmit] = useState(false);
  const [fromData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
  });

  const dateRef = useRef();

  const { selectedCard, date } = useData();

  const { cardTitle, timeStart, timeEnd } = selectedCard;

  const handleSubmit = (e) => {
    const date = dateRef.current.value;
    e.preventDefault();
    if (fromData.name && fromData.email && fromData.phone) {
      setIsSubmit(true);
    } else {
      alert("Please fill the form properly");
    }

    const appointment = {
      patient: fromData,
      date,
      data: selectedCard,
    };

    console.log(appointment);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...fromData, [name]: value });
  };

  return (
    <FormWrapper>
      {isSumbit ? (
        <Check>
          <img src={done} alt="" />
          <div className="info">
            <span className="great">Thank you!</span>
            <span>Your Appointment Booked</span>
          </div>
        </Check>
      ) : (
        <div>
          <h3>{cardTitle}</h3>
          <form>
            <input
              disabled
              type="text"
              ref={dateRef}
              value={`${date.format("MMMM D, YYYY")}`}
            />
            <input disabled type="text" value={`${timeStart} - ${timeEnd}`} />
            <input
              onChange={handleChange}
              name="name"
              placeholder="Full Name"
              type="text"
            />
            <input
              onChange={handleChange}
              name="phone"
              placeholder="Phone Number"
              type="number"
            />
            <input
              onChange={handleChange}
              name="email"
              placeholder="Email"
              type="email"
            />
            <ButtonSubmit onClick={handleSubmit}>SUBMIT</ButtonSubmit>
          </form>
        </div>
      )}
      <Exit onClick={() => isOpen((p) => !p)}>
        <img src={images.exit} alt="" />
      </Exit>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  position: relative;
  width: min(500px, 100%);
  background-color: white;
  height: fit-content;
  @media (max-width: 390px) {
    width: 100%;
  }
  display: flex;
  flex-direction: column;
  padding: 18px;
  gap: 2rem;
  border-radius: 18px;
  box-shadow: 0px 0.1px 2px rgba(0, 0, 0, 0.031),
    0px 0.3px 6px rgba(0, 0, 0, 0.044), 0px 0.7px 12px rgba(0, 0, 0, 0.056),
    0px 1.5px 25px rgba(0, 0, 0, 0.069), 0px 4px 70px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1.25rem;
    text-align: start;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  input:nth-child(1),
  input:nth-child(2) {
    background-color: #e6e6e6;
    color: black;
  }

  input {
    display: block;
    width: 100%;
    font-size: 1rem;
    border: 1px solid #cfcfcf;
    padding: 12px;
    border-radius: 8px;
    margin-block: 1rem;
    color: var(--clr-dark);
  }
`;

const Button = styled.button`
  padding: 13px;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  border: 1px solid var(--clr-dark);
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
`;

const ButtonSubmit = styled(Button)`
  color: #d4d9e3;
  background-color: var(--clr-dark);
`;

const Exit = styled.div`
  background-color: var(--clr-dark);
  width: fit-content;
  padding: 6px;
  border-radius: 50%;
  position: absolute;
  top: 6px;
  right: 6px;
  cursor: pointer;
  img {
    display: block;
  }
`;

const Check = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  img {
    width: 60%;
    display: block;
    margin-inline: auto;
    margin-top: 1rem;
  }
  .info {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
    span {
      font-weight: 700;
      color: #282f8f;
      font-size: 1.25rem;
    }
    .great {
      font-size: 2rem;
    }
  }
`;
