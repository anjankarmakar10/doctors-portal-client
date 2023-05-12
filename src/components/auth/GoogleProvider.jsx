import { styled } from "styled-components";
import { useAuth } from "../../context/AuthProvider";

const GoogleProvider = () => {
  const { signInWithGoogle } = useAuth();

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <ButtonGoogle onClick={handleSignIn}>CONTINUE WITH GOOGLE</ButtonGoogle>
  );
};

const Button = styled.button`
  padding: 13px;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  border: 1px solid var(--clr-dark);
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
`;

const ButtonGoogle = styled(Button)`
  color: var(--clr-dark);
  transition: all 200ms linear;
  &:hover {
    color: #d4d9e3;
    background-color: var(--clr-dark);
  }
`;

export default GoogleProvider;
