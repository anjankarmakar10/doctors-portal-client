import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { images } from "../../constants";

// import exit from "../../assets/exit.svg";
const MobileNav = ({ onExit }) => {
  return (
    <Wrapper>
      <Navlinks>
        <div onClick={onExit} className="exit">
          <img src={images.exit} alt="" />
        </div>
        <Navitem onClick={onExit} to={"/"}>
          Home
        </Navitem>
        <Navitem onClick={onExit} to={"/about"}>
          About
        </Navitem>
        <Navitem onClick={onExit} to={"/appointment"}>
          Appointment
        </Navitem>
        <Navitem onClick={onExit} to={"/reviews"}>
          Reviews
        </Navitem>
        <Navitem onClick={onExit} to={"/contact"}>
          Contact Us
        </Navitem>
        <Navitem onClick={onExit} to={"/login"}>
          Login
        </Navitem>
      </Navlinks>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #bebebed8;
  padding: 1rem;
  z-index: 9999;
`;

const Navlinks = styled.div`
  width: minmax(428px, 100%);
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 18px;
  gap: 1.125rem;
  position: relative;
  scale: 0.9;
  opacity: 0.5;
  will-change: scale;
  color: var(--clr-dark);

  .exit {
    background-color: var(--clr-dark);
    width: fit-content;
    padding: 6px;
    border-radius: 50%;
    position: absolute;
    top: 6px;
    right: 6px;
    cursor: pointer;
    img {
      display: block;
    }
  }
`;
const Navitem = styled.a`
  font-weight: 600;
  color: var(--clr-dark);
  width: fit-content;
`;

export default MobileNav;
