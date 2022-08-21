import styled from 'styled-components';

export const Head = styled.header`
  height: 10vh;
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;

  h1 {
    font-family: 'Fredericka the Great', cursive;
    background: linear-gradient(to right, white 45%, red 0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
export const Navg = styled.nav`
  width: 40%;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;

export const Input = styled.input`
  width: 12%;
  height: 30%;
  border-radius: 30px;
  text-indent: 20px;
`;