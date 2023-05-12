import styled from "styled-components";
import SignInFrom from "./container/SignInFrom";

const Signin = () => {
  return (
    <Wrapper>
      <SignInFrom />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  place-content: center;
  height: 100%;
  padding-inline: 1rem;
  padding-bottom: 2rem;
`;

export default Signin;
