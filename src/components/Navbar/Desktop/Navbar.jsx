import { Menu } from "react-feather";
import { useState } from "react";
import MobileNav from "../Mobile/MobileNav";
import {
  Wrapper,
  MenuIcon,
  Nav,
  Navitem,
  Navlinks,
  Logo,
} from "./Navbar.style";

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
          <Navitem to={"/signin"}>Login</Navitem>
          <MenuIcon onClick={() => setActive(true)}>
            <Menu />
          </MenuIcon>
        </Navlinks>
        <>{active && <MobileNav onExit={handleExit} />}</>
      </Nav>
    </Wrapper>
  );
};

export default Navbar;
