import styled from "styled-components";
import Button from "../../../../components/Button/Button";
import QUERIES from "../../../../constants/Queries";
import { images } from "../../../../constants";

const Treatment = () => {
  return (
    <Wrapper>
      <RightCol>
        <img src={images.treatment} alt="" />
      </RightCol>
      <LeftCol>
        <h1>Exceptional Dental Care, on Your Terms</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <Button name={"Get Started"} />
      </LeftCol>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-inline: 1.5rem;
  display: flex;
  margin-top: 0.5rem;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  color: var(--clr-dark);
  padding-inline: 8rem;

  @media ${QUERIES.tabletAndDown} {
    flex-direction: column;
    padding-inline: 0rem;
  }
`;

const LeftCol = styled.div`
  flex: 1;
  h1 {
    margin-bottom: 1.875rem;
    line-height: 1.3;
    @media ${QUERIES.tabletAndDown} {
      line-height: 1.2;
    }
  }
  p {
    margin-bottom: 1.875rem;
  }
`;
const RightCol = styled.div`
  flex: 1;
  min-width: min(350px, 100%);
  img {
    width: 100%;
    display: block;
    height: 550px;
    @media ${QUERIES.tabletAndDown} {
      height: 400px;
    }
    object-fit: cover;
    border-radius: 8px;
  }
`;
export default Treatment;
