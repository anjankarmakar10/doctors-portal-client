import { styled } from "styled-components";
import QUERIES from "../../../../constants/Queries";
import { images } from "../../../../constants";

const Wrapper = styled.div`
  min-height: calc(100vh - 64px);
  background-image: url(${images.bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-inline: 1.5rem;
  display: flex;
  margin-top: 0.5rem;
  align-items: center;
  gap: 1.5rem;
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
  h1 {
    margin-bottom: 1.875rem;
    @media ${QUERIES.tabletAndDown} {
      line-height: 1.1;
      font-size: 2.5rem;
    }
  }
  p {
    margin-bottom: 1.875rem;
  }
`;
const RightCol = styled.div`
  flex: 1;
  img {
    width: 100%;
  }
`;

export { Wrapper, LeftCol, RightCol };
