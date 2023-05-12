import styled from "styled-components";

const ServiceCard = ({ img, title, info }) => {
  return (
    <Wrapper>
      <img src={img} alt="" />
      <h3 className="title">{title}</h3>
      <p className="subtitle">{info}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-inline: 56px;
  padding-block: 44px 24px;
  border-radius: 18px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  will-change: transform;
  box-shadow: 0px 0.1px 2.7px rgba(0, 0, 0, 0.031),
    0px 0.3px 6.9px rgba(0, 0, 0, 0.044), 0px 0.7px 14.2px rgba(0, 0, 0, 0.056),
    0px 1.5px 29.2px rgba(0, 0, 0, 0.069), 0px 4px 80px rgba(0, 0, 0, 0.1);
  &:hover {
    /* scale: 1.03; */
    transform: translateY(-5%);
  }
  img {
    margin-bottom: 2.125rem;
    width: 115px;
    display: block;
  }
  .title {
    font-size: 1.25rem;
    color: var(--clr-dark);
    margin-bottom: 0.75rem;
  }
  .subtitle {
    font-size: 1rem;
  }
`;
export default ServiceCard;
