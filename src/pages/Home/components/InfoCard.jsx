import styled from "styled-components";
import QUERIES from "../../../constants/Queries";

const InfoCard = ({ img, title, info, isDark }) => {
  return (
    <>
      <Wrapper dark={isDark}>
        <img src={img} alt="" />
        <div className="info">
          <h3 className="title">{title}</h3>
          <p className="subtitle">{info}</p>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.article`
  background: ${(p) => (p.dark ? "var(--clr-dark)" : "var(--clr-lin-green)")};
  padding: 42px 32px 40px 24px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  gap: 1.375rem;
  color: white;
  justify-content: center;
  width: 100%;
  cursor: pointer;

  @media ${QUERIES.tabletAndDown} {
    flex-direction: column;
  }

  .title {
    margin-bottom: 0.75rem;
  }
`;

export default InfoCard;
