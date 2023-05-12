import styled from "styled-components";
import { Menu } from "react-feather";
import QUERIES from "../../constants/Queries";
import MobileNav from "./MobileNav";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleExit = () => {
    setActive(false);
  };
  return (
    <Wrapper className="DDD">
      <Nav>
        <Logo>
          <a href="/">Doctors Portal</a>
        </Logo>
        <Navlinks>
          <Navitem to={"/"}>Home</Navitem>
          <Navitem to={"/about"}>About</Navitem>
          <Navitem to={"/appointment"}>Appointment</Navitem>
          <Navitem to={"/reviews"}>Reviews</Navitem>
          <Navitem to={"/contact"}>Contact Us</Navitem>
          <Navitem to={"/login"}>Login</Navitem>
          <MenuIcon onClick={() => setActive(true)}>
            <Menu />
          </MenuIcon>
        </Navlinks>
        <MobileNavWrapper>
          {active && <MobileNav onExit={handleExit} />}
        </MobileNavWrapper>
      </Nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1375px;
  margin-inline: auto;
`;

const Nav = styled.nav`
  background-color: var(--clr-bg);
  height: 64px;
  display: flex;
  align-items: center;
  padding-inline: 1.5rem;
  left: 0;
  right: 0;
  top: 0;
  /* position: fixed; */
`;

const Logo = styled.div`
  margin-right: auto;
  font: 1.125rem;
  font-weight: 600;
  color: var(--clr-dark);
`;
const Navlinks = styled.ul`
  display: flex;
  gap: 1.875rem;
  align-items: center;
`;
const Navitem = styled.a`
  cursor: pointer;
  font-size: 1rem;
  color: var(--clr-dark);

  &.active {
    background-color: #3a4256;
    border-radius: 8px;
    padding-inline: 12px;
    padding-block: 8px;
    color: #d4d9e3;
  }
  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;
const MenuIcon = styled.div`
  cursor: pointer;
  display: none;
  @media ${QUERIES.tabletAndDown} {
    display: revert;
  }
`;

const MobileNavWrapper = styled.div``;

export default Navbar;
