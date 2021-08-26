import styled from "styled-components";

export const Navbar = styled.nav`
  background-color: #f3ca20;
  color: black;
  height: 5vh;
  margin-bottom: 30px;
  padding-bottom: 10px;
  padding-left: 10px;
  top: 0;

  h2 {
    font-family: "Lobster", cursive;
  }

  @media (max-width: 767px) {
    text-align: center;
  }
`;
