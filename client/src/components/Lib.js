// library of reusable components with styling
import styled from "styled-components";

// navbar

export const Nav = styled.nav`
@media (min-width: 320px) {
  width: 100vw;
  height: 120px;
  padding: 0.5em;
  background-color: #fae6b1;
display: flex;
justify-content: space-between;
.logo{

  font-family: Dancing Script;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  color: #ffa101;
  text-shadow: 0px 4px 4px #fefae0;
}
`;

// drop-down menu on the right
export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: columnn nowrap;
    background-color: yellow;
    position: fixed;
    top: 0;
    right: 0;

    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
  }
`;

// burger menu
export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: #333;
    border-radius: 10px;
  }
`;
// basic button
export const Button = styled.button`
  color: #31525b;
  background-color: transparent;

  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 32px;
  border-radius: 4px;
  border: none;

  &:hover {
    background-color: #ffa101;
  }
  &:focus {
    background-color: #ffa101;
  }
  &:active {
    background-color: #ffa101;
    padding: 4pt;
    border-radius: 4px;
  }
`;
