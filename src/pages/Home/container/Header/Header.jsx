import { images } from "../../../../constants";
import Button from "../../../../components/Button/Button";
import { Wrapper, LeftCol, RightCol } from "./Header.style";
const Header = () => {
  return (
    <Wrapper>
      <LeftCol>
        <h1>Your New Smile Starts Here</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the
        </p>
        <Button name={"Get Started"} />
      </LeftCol>
      <RightCol>
        <img src={images.chair} alt="" />
      </RightCol>
    </Wrapper>
  );
};

export default Header;
