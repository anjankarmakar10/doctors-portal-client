import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #bebebed8;
  padding: 1rem;
  z-index: 9999;
`;

const Navlinks = styled.div`
  width: minmax(428px, 100%);
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 18px;
  gap: 1.125rem;
  position: relative;
  color: var(--clr-dark);
`;

const ExitMenu = styled.div`
  background-color: var(--clr-dark);
  width: fit-content;
  padding: 6px;
  border-radius: 50%;
  position: absolute;
  top: 6px;
  right: 6px;
  cursor: pointer;
  img {
    display: block;
  }
`;

const Navitem = styled(Link)`
  font-weight: 600;
  color: var(--clr-dark);
  width: fit-content;
`;

export { Wrapper, Navlinks, Navitem, ExitMenu };
