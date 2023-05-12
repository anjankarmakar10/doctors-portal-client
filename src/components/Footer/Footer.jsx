import styled from "styled-components";
import { images } from "../../constants";
import QUERIES from "../../constants/Queries";

const Footer = () => {
  return (
    <Wrapper>
      <ListWrapper>
        <List>
          <h3>Service</h3>
          <ul>
            <li>
              <a href="#">Emergency Checkup</a>
            </li>
            <li>
              <a href="#">Monthly Checkup</a>
            </li>
            <li>
              <a href="#">Weekly Checkup</a>
            </li>
            <li>
              <a href="#">Deep Checkup</a>
            </li>
          </ul>
        </List>

        <List>
          <h3>ORAL HEALTH</h3>
          <ul>
            <li>
              <a href="#">Fluoride Treatment</a>
            </li>
            <li>
              <a href="#">Cavity Filling</a>
            </li>
            <li>
              <a href="#">Teath Whitening</a>
            </li>
          </ul>
        </List>

        <List>
          <h3>OUR ADDRESS</h3>
          <ul>
            <li>
              <a href="#">New York - 101010 Hudson</a>
            </li>
          </ul>
        </List>
      </ListWrapper>
      <span>Copyright 2022 All Rights Reserved</span>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  padding-inline: 6rem;
  padding-block: 4rem 2.5rem;
  text-align: center;
  background-image: url(${images.footer});
  background-position: center;
  background-size: cover;

  @media ${QUERIES.tabletAndDown} {
    padding-inline: 2rem;
    padding-block: 3rem 4rem;
    background-size: auto;
  }

  span {
    font-size: 1rem;
  }
`;

const ListWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-bottom: 7rem;
  text-align: start;
  @media ${QUERIES.tabletAndDown} {
    flex-direction: column;
    align-items: flex-start;
    gap: 6rem;
  }
`;

const List = styled.div`
  h3 {
    font-size: 1.125rem;
    color: var(--clr-green);
    margin-bottom: 1.125rem;
    text-transform: uppercase;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
    a {
      font-size: 1rem;
      color: var(--clr-dark);
    }
  }
`;

export default Footer;
