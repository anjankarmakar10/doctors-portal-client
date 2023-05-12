import styled from "styled-components";
import QUERIES from "../../../../constants/Queries";
import Button from "../../../../components/Button/Button";
import { images } from "../../../../constants";

const DrAppointment = () => {
  return (
    <Wrapper>
      <LeftCol>
        <img src={images.doctorSmall} alt="" />
      </LeftCol>

      <RightCol>
        <div className="wrap">
          <h3>appointment</h3>
          <h1>Make an appointment Today</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <Button name={"Get Started"} />
        </div>
      </RightCol>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 15rem;
  height: 533px;
  background-image: url(${images.appointment});
  position: relative;
  margin-bottom: 6rem;
  display: flex;
  align-items: center;

  img {
    position: absolute;
    bottom: 0;
    width: 50%;
  }
`;

const LeftCol = styled.div`
  flex: 1;
  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;
const RightCol = styled.div`
  flex: 1;
  display: flex;
  padding-inline: 1rem;
  .wrap {
    display: flex;
    flex-direction: column;
    gap: 22px;
    text-align: left;
    width: fit-content;
  }

  @media ${QUERIES.tabletAndDown} {
    justify-content: center;
    align-items: center;
  }
  h3 {
    font-size: 1.25rem;
    color: var(--clr-green);
    font-weight: 700;
    text-transform: uppercase;
  }
  h1 {
    line-height: 1.1;
    font-size: 2.25rem;
    color: white;
  }
  p {
    max-width: 400px;
    color: white;
  }
  button {
    width: fit-content;
  }
`;

export default DrAppointment;
