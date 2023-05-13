import { Wrapper, Navlinks, Navitem, ExitMenu } from "./MobileNav.style";
import { images } from "../../../constants";
import { useAuth } from "../../../context/AuthProvider";

// import exit from "../../assets/exit.svg";
const MobileNav = ({ onExit }) => {
  const { user } = useAuth();

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

        <>
          {user ? (
            <Navitem onClick={onExit} to={"/profile"}>
              {user?.displayName}
            </Navitem>
          ) : (
            <Navitem onClick={onExit} to={"/signin"}>
              Login
            </Navitem>
          )}
        </>
      </Navlinks>
    </Wrapper>
  );
};

export default MobileNav;
