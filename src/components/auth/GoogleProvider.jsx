import { styled } from "styled-components";

const GoogleProvider = () => {
  return <ButtonGoogle>CONTINUE WITH GOOGLE</ButtonGoogle>;
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
  :hover {
    color: #d4d9e3;
    background-color: var(--clr-dark);
  }
`;

export default GoogleProvider;
