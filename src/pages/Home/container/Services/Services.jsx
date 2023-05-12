import styled from "styled-components";
import { images } from "../../../../constants";
import QUERIES from "../../../../constants/Queries";
import ServiceCard from "../../components/ServiceCard";

const Services = () => {
  return (
    <Wrapper>
      <ServiceHeader>
        <h3 className="title">OUR SERVICES</h3>
        <p className="subtitle">Services We Provide</p>
      </ServiceHeader>

      <ServiceContiner>
        <ServiceCard
          img={images.fluoride}
          title={"Fluoride Treatment"}
          info={
            "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
          }
        />
        <ServiceCard
          img={images.cavity}
          title={"Cavity Filling"}
          info={
            "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
          }
        />
        <ServiceCard
          img={images.whitening}
          title={"Teeth Whitening"}
          info={
            "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
          }
        />
      </ServiceContiner>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-block: 8rem 9rem;
  padding-inline: 1.5rem;

  @media ${QUERIES.tabletAndDown} {
    padding-inline: 1rem;
  }
`;

const ServiceHeader = styled.div`
  text-align: center;
  margin-bottom: 4.375rem;

  .title {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1.25rem;
    color: var(--clr-green);
    margin-bottom: 0.5rem;
  }

  .subtitle {
    font-size: 2.25rem;
    color: var(--clr-dark);
  }
`;

const ServiceContiner = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(320px, 100%), 1fr));
  gap: 1.5rem;
  gap: 34px;
`;

export default Services;
