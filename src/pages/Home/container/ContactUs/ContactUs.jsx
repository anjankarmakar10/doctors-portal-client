import styled from "styled-components";
import { images } from "../../../../constants";
import Button from "../../../../components/Button/Button";
import QUERIES from "../../../../constants/Queries";

const ContactUs = () => {
  return (
    <Wrapper>
      <div>
        <h4>Contact Us</h4>
        <p>Stay connected with us</p>
      </div>
      <Form>
        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Subject" />
        <textarea placeholder="Your message" cols="30" rows="10"></textarea>
        <Button name={"Submit"} />
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-image: url(${images.appointment});
  height: 600px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-inline: 1.5rem;

  h4 {
    font-size: 1.25rem;
    color: var(--clr-green);
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 2.25rem;
    color: white;
    margin-bottom: 2.5rem;
  }
`;

const Form = styled.form`
  width: min(450px, 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  input {
    width: 100%;
    max-height: 48px;
    padding: 15px;
    @media ${QUERIES.tabletAndDown} {
      padding: 12px;
    }
    border-radius: 8px;
    outline: 0;
    border: 0;
    font-size: 1rem;
    color: rgba(58, 66, 86, 0.7);
    transition: outline 0.15s ease-in;
    &:focus {
      outline: 3px solid #0f81ec;
    }
  }
  textarea {
    width: 100%;
    padding: 15px;
    @media ${QUERIES.tabletAndDown} {
      padding: 12px;
    }
    max-height: 136px;
    border-radius: 8px;
    outline: 0;
    border: 0;
    font-size: 1rem;
    color: rgba(58, 66, 86, 0.7);
    transition: outline 0.15s ease-in;
    &:focus {
      outline: 3px solid #0f81ec;
    }
  }

  button {
    width: 120px;
    text-align: center;
    margin-top: 1rem;
  }
`;
export default ContactUs;
