import { Wrapper, Navlinks, Navitem, ExitMenu } from "./MobileNav.style";
import { images } from "../../../constants";

// import exit from "../../assets/exit.svg";
const MobileNav = ({ onExit }) => {
  return (
    <Wrapper>
      <Navlinks>
        <ExitMenu onClick={onExit}>
          <img src={images.exit} alt="" />
        </ExitMenu>
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

export default MobileNav;
