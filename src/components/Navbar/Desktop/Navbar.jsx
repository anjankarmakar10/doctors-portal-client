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

import { useAuth } from "../../../context/AuthProvider";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const { user } = useAuth();

  const handleExit = () => {
    setActive(false);
  };
  return (
    <Wrapper>
      <Nav>
        <Logo>
          <Link to="/">Doctors Portal</Link>
        </Logo>
        <Navlinks>
          <Navitem to={"/"}>Home</Navitem>
          <Navitem to={"/about"}>About</Navitem>
          <Navitem to={"/appointment"}>Appointment</Navitem>
          <>
            {user ? (
              <Navitem to={"/profile"}>{user?.displayName}</Navitem>
            ) : (
              <Navitem to={"/signin"}>Login</Navitem>
            )}
          </>

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
