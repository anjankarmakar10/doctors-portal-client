import styled from "styled-components";
import Button from "../../../components/Button/Button";
import { useData } from "../../../context/DataProvider";

const AppointmentCard = (props) => {
  const { setSelectedCard } = useData();

  const { cardTitle, space, timeStart, timeEnd, setIsOpen } = props;

  const handleModal = () => {
    setIsOpen((p) => !p);
    setSelectedCard(props);
  };

  return (
    <Wrapper>
      <CardTitle>{cardTitle}</CardTitle>
      <Time>
        {timeStart} - {timeEnd}
      </Time>
      <Space>{space} SPACES AVAILABLE</Space>
      <ButtonWrapper onClick={() => handleModal(props)}>
        <Button name="Book Appointment" />
      </ButtonWrapper>
    </Wrapper>
  );
};

const CardTitle = styled.h3`
  font-size: 1.25rem;
  color: var(--clr-green);
  margin-bottom: 0.5625rem;
  z-index: 3;
  transition: color 0.5s ease-in-out;
`;
const Time = styled.div`
  margin-bottom: 0.75rem;
  font-size: 0.875rem;
  color: black;
  z-index: 3;
  font-weight: 600;
  transition: color 0.5s ease-in-out;
`;
const Space = styled.div`
  margin-bottom: 0.875rem;
  font-size: 0.75rem;
  color: black;
  z-index: 3;
  transition: color 0.5s ease-in-out;
`;

const ButtonWrapper = styled.div`
  z-index: 3;
`;

const Wrapper = styled.article`
  border-radius: 18px;
  box-shadow: 0px 0.1px 2.7px rgba(0, 0, 0, 0.031),
    0px 0.3px 6.9px rgba(0, 0, 0, 0.044), 0px 0.7px 14.2px rgba(0, 0, 0, 0.056),
    0px 1.5px 29.2px rgba(0, 0, 0, 0.069), 0px 4px 80px rgba(0, 0, 0, 0.1);
  padding-block: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  overflow: hidden;
  z-index: 1;
  isolation: isolate;

  &::before {
    z-index: 2;
    content: " ";
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: #0dcaf0;
    clip-path: circle(10% at 100% 0%);
    transition: all 0.5s ease-in-out;
  }
  &:hover,
  &:focus {
    &::before {
      clip-path: circle(100%);
      background-color: #317ae7;
    }
    ${CardTitle} {
      color: #ffffff;
    }
    ${Time} {
      color: white;
    }
    ${Space} {
      color: white;
    }
  }
`;

export default AppointmentCard;
