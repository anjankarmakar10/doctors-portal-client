import styled from "styled-components";

const SignInFrom = () => {
  return (
    <Wrapper>
      <h3>Login</h3>
      <form>
        <label htmlFor="Email">
          <span>Email</span>
          <input type="email" />
        </label>
        <label htmlFor="password">
          <span>Pasword</span>
          <input type="password" />
          <span className="forgot">Forgot Password?</span>
        </label>
        <ButtonLogin>Login</ButtonLogin>
        <p className="create">
          New to Doctors Portal? <span>Create new account</span>
        </p>
        <p className="or">OR</p>
        <ButtonGoogle>CONTINUE WITH GOOGLE</ButtonGoogle>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 385px;
  @media (max-width: 390px) {
    width: 100%;
  }
  display: flex;
  flex-direction: column;
  padding: 35px 29px 29px 29px;
  gap: 1.5rem;
  border-radius: 18px;
  box-shadow: 0px 0.1px 2px rgba(0, 0, 0, 0.031),
    0px 0.3px 6px rgba(0, 0, 0, 0.044), 0px 0.7px 12px rgba(0, 0, 0, 0.056),
    0px 1.5px 25px rgba(0, 0, 0, 0.069), 0px 4px 70px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1.25rem;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  label {
    margin-bottom: 12px;
    font-size: 0.875rem;

    span {
      margin-bottom: 3px;
      color: black;
      font-weight: 500;
      display: inline-block;
    }
  }
  input {
    display: block;
    width: 100%;
    border: 1px solid #cfcfcf;
    padding: 12px;
    border-radius: 8px;
    color: var(--clr-dark);
  }
  .forgot {
    margin-top: 2px;
    font-size: 0.625rem;
    cursor: pointer;
    font-weight: 500;
  }
  .create {
    font-size: 0.75rem;
    text-align: center;
    margin-top: 0.625rem;
    font-weight: 500;

    span {
      color: var(--clr-green);
      cursor: pointer;
      margin-left: 6px;
    }
  }

  .or {
    margin-block: 1rem 1.5rem;
    text-align: center;
    font-weight: 500;
  }
`;

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

const ButtonLogin = styled(Button)`
  color: #d4d9e3;
  background-color: var(--clr-dark);
`;
const ButtonGoogle = styled(Button)`
  color: var(--clr-dark);
`;

export default SignInFrom;
