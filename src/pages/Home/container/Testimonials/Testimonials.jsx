import styled from "styled-components";
import QUERIES from "../../../../constants/Queries";
import { images } from "../../../../constants";
import TestimonialCard from "../../components/TestimonialCard";

const Testimonials = () => {
  return (
    <Wrapper>
      <TopContainer>
        <div className="topHeading">
          <h3>Testimonial</h3>
          <p>What Our Patients Says</p>
        </div>

        <img src={images.quote} alt="" />
      </TopContainer>
      <BottomContainer>
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </BottomContainer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-bottom: 9rem;
  padding-inline: 2.5rem;
  @media ${QUERIES.tabletAndDown} {
    padding-inline: 1rem;
  }
`;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
  justify-content: space-between;
  gap: 2rem;
  img {
    width: 24%;
    min-width: 90px;
  }

  h3 {
    font-size: 1.25rem;
    color: var(--clr-green);
    margin-bottom: 0.625rem;
  }
  p {
    font-size: 2.25rem;
    color: var(--clr-dark);
  }
`;
const BottomContainer = styled.div`
  padding-inline: 1.5rem;
  @media ${QUERIES.laptopAndDown} {
    padding-inline: 0.5rem;
  }

  gap: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(320px, 100%), 1fr));
`;

export default Testimonials;
