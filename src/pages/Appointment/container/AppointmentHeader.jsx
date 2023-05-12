import React from "react";
import styled from "styled-components";
import Calendar from "../components/Calendar";
import QUERIES from "../../../constants/Queries";
import { images } from "../../../constants/images";

const AppointmentHeader = () => {
  return (
    <Wrapper>
      <LeftCol>
        <div className="marginAuto">
          <Calendar />
        </div>
      </LeftCol>
      <RightCol>
        <img src={images.chair} alt="" />
      </RightCol>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  background-image: url(${images.bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-inline: 1.5rem;
  display: flex;
  margin-top: 0.5rem;
  align-items: center;
  gap: 4rem;
  color: var(--clr-dark);
  padding-inline: 2rem;

  @media ${QUERIES.tabletAndDown} {
    flex-direction: column-reverse;
    height: 100%;
    padding-inline: 0rem;
    background-image: none;
    margin-inline: 1rem;
  }
`;

const LeftCol = styled.div`
  flex: 1;
  .marginAuto {
    width: 320px;
  }
  display: flex;
  justify-content: center;
  h1 {
    margin-bottom: 1.875rem;
    @media ${QUERIES.tabletAndDown} {
      line-height: 1.1;
    }
  }
  p {
    margin-bottom: 1.875rem;
  }
`;
const RightCol = styled.div`
  flex: 1;
  img {
    width: min(600px, 100%);
  }
`;

export default AppointmentHeader;
