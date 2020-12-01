// library of reusable components with styling
import styled from "styled-components";

// section navbar real colour is -> //#fae6b1;
export const Section = styled.div`
  @media (min-width: 768px) {
    width: 100vw;

    padding: 1em;
    background-color: red;
  }
`;
//What-to-cook in the navbar
export const Title = styled.h1`
  font-family: Dancing Script;
  font-style: normal;
  font-weight: bold;
  font-size: 56px;
  color: #ffa101;
  text-shadow: 0px 4px 4px #fefae0;
`;
// basic button
export const Button = styled.button`
  color: #31525b;
  text-shadow: 0px 2px 2px #fefae0;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 32px;
`;
// real colour #31525b;
export const HoveredButton = styled.button`
  color: black;
`;
// real color  #ffa101;
export const SelectedButton = styled.button`
  background-color: pink;
  padding: 4pt;
  border-radius: 4px;
`;
