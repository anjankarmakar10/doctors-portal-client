import React, { useState } from "react";
import styled from "styled-components";

import AppointmentCard from "./components/AppointmentCard";
import { AppointmentFrom } from "./container/AppointmentFrom";
import AppointmentHeader from "./container/AppointmentHeader";
import { useData } from "../../context/DataProvider";
import useTreatments from "../../hooks/useTreatments";

const Appointment = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { date } = useData();

  const data = useTreatments();

  return (
    <Wrapper>
      <AppointmentHeader />
      <AppointmentTitle>
        Available Appointments on {date.format("MMMM D, YYYY")}
      </AppointmentTitle>

      {date.$W == 5 ? (
        <Weekend>No Appointment on Friday </Weekend>
      ) : (
        <CardContainer>
          {data
            ?.filter((item) => item.week !== +date.$W)
            ?.map((appointment) => (
              <AppointmentCard
                key={appointment.id}
                id={appointment.id}
                cardTitle={appointment.title}
                timeStart={appointment.timeStart}
                timeEnd={appointment.timeEnd}
                space={appointment.space}
                setIsOpen={setIsOpen}
              />
            ))}
        </CardContainer>
      )}

      {isOpen && (
        <FromWrapper>
          <AppointmentFrom isOpen={setIsOpen} />
        </FromWrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-inline: 1.5rem;
  max-width: 1200px;
  margin-inline: auto;
`;

const AppointmentTitle = styled.h3`
  font-size: clamp(1.5rem, 5vw, 1.25rem);
  text-align: center;
  color: var(--clr-green);
  margin-block: 4rem;
`;

const CardContainer = styled.section`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(min(320px, 100%), 1fr));
  margin-bottom: 8.5rem;
`;

const Weekend = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -2rem;
  padding-bottom: 2rem;
  font-size: 2rem;
  font-weight: 700;
  color: #317ae7;
`;

const FromWrapper = styled.div`
  position: fixed;
  inset: 0;
  background-color: #bebebed8;
  z-index: 8888;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-inline: 1rem;
`;

export default Appointment;
