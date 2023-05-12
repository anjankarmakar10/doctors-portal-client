import React from "react";
import styled from "styled-components";

const Button = ({ name }) => {
  return <Wrapper>{name}</Wrapper>;
};

const Wrapper = styled.button`
  background: var(--clr-lin-green);
  font-size: 0.875rem;
  text-transform: uppercase;
  font-weight: 700;
  color: white;
  border-radius: 0.5rem;
  padding: 15px 14px 14px 15px;
`;

export default Button;
