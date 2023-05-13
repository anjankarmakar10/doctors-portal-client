import styled from "styled-components";
import { images } from "../../../../constants";
import QUERIES from "../../../../constants/Queries";
import InfoCard from "../../components/InfoCard";

const Info = () => {
  return (
    <Wrapper>
      <InfoCard
        title={"Opening Hours"}
        info={"Lorem Ipsum is simply dummy text of the pri"}
        img={images.clock}
      />
      <InfoCard
        isDark={"true"}
        title={"Visit our location"}
        info={"Lorem Ipsum is simply dummy text of the pri"}
        img={images.marker}
      />
      <InfoCard
        title={"Contact us now"}
        info={"Lorem Ipsum is simply dummy text of the pri"}
        img={images.phone}
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-inline: 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(320px, 100%), 1fr));
  gap: 1.5rem;
  padding-top: 5rem;

  @media ${QUERIES.tabletAndDown} {
    gap: 1.875rem;
    padding-inline: 1rem;
  }
`;

export default Info;
