import styled from "styled-components";
import QUERIES from "../../../constants/Queries";
import { images } from "../../../constants";

const TestimonialCard = () => {
  return (
    <Wrapper>
      <Info>
        <p>
          It is a long established fact that by the readable content of a lot
          layout. The point of using Lorem a more-or-less normal distribu to
          using Content here, content
        </p>
      </Info>
      <Profile>
        <div className="photo">
          <img src={images.profile1} alt="" />
        </div>
        <div className="name">
          <h4>Winson Herry</h4>
          <p>Califonia</p>
        </div>
      </Profile>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding: 24px;
  border-radius: 18px;
  box-shadow: 0px 0.1px 2.7px rgba(0, 0, 0, 0.031),
    0px 0.3px 6.9px rgba(0, 0, 0, 0.044), 0px 0.7px 14.2px rgba(0, 0, 0, 0.056),
    0px 1.5px 29.2px rgba(0, 0, 0, 0.069), 0px 4px 80px rgba(0, 0, 0, 0.1);
  gap: 1.5rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const Info = styled.div`
  p {
    font-size: 1.125rem;
    line-height: 1.55;
  }
`;
const Profile = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  .photo {
    img {
      width: 55px;
      display: block;
      @media ${QUERIES.tabletAndDown} {
        width: 50px;
      }
    }
    padding: 2px;
    border-radius: 50%;
    border: 3px solid var(--clr-green);
  }
  .name {
    h4 {
      font-size: 1rem;
      font-weight: 600;
      color: var(--clr-dark);
    }
    p {
      font-size: 0.875rem;
      color: rgba(0, 0, 0, 0.8);
    }
  }
`;

export default TestimonialCard;
