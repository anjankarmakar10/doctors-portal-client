import styled from "styled-components";
import SignUpFrom from "./container/SignUpFrom";

const SignUp = () => {
  return (
    <Wrapper>
      <SignUpFrom />
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

export default SignUp;
