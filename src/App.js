import React, { Component } from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import Header from './parts/header/Header.js';
import Main from './parts/main/Main.js';
import Footer from './parts/footer/Footer.js';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
`;

const Body = styled.body`
  background-color: rgb(25, 25, 55);
`;

export default class App extends Component {
  render() {
    return (
      <Body>
        <GlobalStyle/>
        <Header />
        <Main />
        <Footer />
      </Body>
    );
  }
}
